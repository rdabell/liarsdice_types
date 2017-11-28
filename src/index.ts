import { Moment, utc } from 'moment';

export class Dice {
    public pips: number;
}

export class Bid {
    public quantity: number = 0;
    public dice: Dice = null;
}

export class Player {
    public name: string = "";
    public color: string = "";

}

export class Chat {
    public messenger: Player = null;
    public message: string = "";
    public time: Moment = utc();
}

export class ChatWindow {
    public messages: Chat[] = [];
}

export class Game {
    public players: Player[] = [];
    public turn: Player = null;
         
}

export interface PlayerData {
    player: Player;
    data: any;
}

export class Turn {
    player: Player;
    bid: Bid;
}