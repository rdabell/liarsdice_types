import {Player} from './player';

export class Message {
    key: string;
    data: any;
}

export interface PlayerData {
    player: Player;
    data: any;
}