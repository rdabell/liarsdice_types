import { Moment } from 'moment';
export declare class Dice {
    pips: number;
}
export declare class Bid {
    quantity: number;
    dice: Dice;
}
export declare class Player {
    name: string;
    color: string;
}
export declare class Chat {
    messenger: Player;
    message: string;
    time: Moment;
}
export declare class ChatWindow {
    messages: Chat[];
}
export declare class Game {
    players: Player[];
    turn: Player;
}
export interface PlayerData {
    player: Player;
    data: any;
}
export declare class Turn {
    player: Player;
    bid: Bid;
}
