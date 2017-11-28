"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = require("moment");
class Chat {
    constructor() {
        this.messenger = null;
        this.message = "";
        this.time = moment_1.utc();
    }
}
exports.Chat = Chat;
class ChatWindow {
    constructor() {
        this.messages = [];
    }
}
exports.ChatWindow = ChatWindow;
//# sourceMappingURL=chat.js.map