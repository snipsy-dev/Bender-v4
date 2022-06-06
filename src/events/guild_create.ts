import { EventHandler } from '../data/types';
import { GuildCreateData, LowercaseEventName } from '../data/gatewayTypes';
import Bot from '../structures/bot';
import { basename } from 'path';
import TimeUtils from '../utils/time';

export default class GuildCreateHandler extends EventHandler<GuildCreateData> {
    constructor(bot: Bot) {
        super(basename(__filename, '.js') as LowercaseEventName, bot);
    }

    cacheHandler = (eventData: GuildCreateData) => {
        this.bot.cache.guilds.create(eventData);
        if (this.bot.cache.unavailableGuilds.includes(eventData.id)) {
            const index = this.bot.cache.unavailableGuilds.indexOf(eventData.id);
            this.bot.cache.unavailableGuilds.splice(index, 1);
        }
    }

    handler = (eventData: GuildCreateData) => {
        const joinedAt = TimeUtils.parseTimestampMillis(eventData.joined_at);
        const millisSinceJoin = TimeUtils.getElapsedMillis(joinedAt);
        if (millisSinceJoin > 60*1000) {
            this.bot.logger.debug('GUILD_CREATE', 'Skipped since this guild is just becoming available');
            return;
        }
        // TODO: send intro message for new servers
    }
}