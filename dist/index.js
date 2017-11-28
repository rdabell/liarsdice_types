"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = require("moment");
class Dice {
}
exports.Dice = Dice;
class Bid {
    constructor() {
        this.quantity = 0;
        this.dice = null;
    }
}
exports.Bid = Bid;
class Player {
    constructor() {
        this.name = "";
        this.color = "";
    }
}
exports.Player = Player;
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
class Game {
    constructor() {
        this.players = [];
        this.turn = null;
    }
}
exports.Game = Game;
class Turn {
}
exports.Turn = Turn;
