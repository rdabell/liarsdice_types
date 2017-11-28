import { Player } from './player';
import { Moment } from 'moment';
export declare class Chat {
    messenger: Player;
    message: string;
    time: Moment;
}
export declare class ChatWindow {
    messages: Chat[];
}
