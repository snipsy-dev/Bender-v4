import { EventHandler } from "../data/types";
import { CommandUpdateData, LowercaseEventName } from "../data/gatewayTypes";
import Bot from "../structures/bot";
import { basename } from "path";

export default class CommandCreateHandler extends EventHandler {
    constructor(bot: Bot) {
        const filename = basename(__filename, '.js');
        super(filename as LowercaseEventName, bot);
    }

    cacheHandler = (eventData: CommandUpdateData) => {

    }

    handler = (eventData: CommandUpdateData) => {

    }
}