import { EventHandler } from "../data/types";
import { GuildBanEventData, LowercaseEventName } from "../data/gatewayTypes";
import Bot from "../structures/bot";
import { basename } from "path";

export default class GuildBanAddHandler extends EventHandler {
    constructor(bot: Bot) {
        const filename = basename(__filename, '.js');
        super(filename as LowercaseEventName, bot);
    }

    cacheHandler = (eventData: GuildBanEventData) => {

    }

    handler = (eventData: GuildBanEventData) => {

    }
}