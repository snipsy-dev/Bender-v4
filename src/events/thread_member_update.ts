import { EventHandler } from "../data/types";
import { ThreadMemberUpdateData, LowercaseEventName } from "../data/gatewayTypes";
import Bot from "../structures/bot";
import { basename } from "path";

export default class ThreadMemberUpdateHandler extends EventHandler {
    constructor(bot: Bot) {
        const filename = basename(__filename, '.js');
        super(filename as LowercaseEventName, bot);
    }

    cacheHandler = (eventData: ThreadMemberUpdateData) => {

    }

    handler = (eventData: ThreadMemberUpdateData) => {

    }
}