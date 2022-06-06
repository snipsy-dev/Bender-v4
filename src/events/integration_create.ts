import { EventHandler } from '../data/types';
import { IntegrationUpdateData, LowercaseEventName } from '../data/gatewayTypes';
import Bot from '../structures/bot';
import { basename } from 'path';

export default class IntegrationCreateHandler extends EventHandler<IntegrationUpdateData> {
    constructor(bot: Bot) {
        super(basename(__filename, '.js') as LowercaseEventName, bot);
    }

    handler = (/*eventData: IntegrationUpdateData*/) => {
        // event unused for now
    }
}