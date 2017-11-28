import { Player } from './player';
import { Moment, utc } from 'moment';

export class Chat {
    public messenger: Player = null;
    public message: string = "";
    public time: Moment = utc();
}

export class ChatWindow {
    public messages: Chat[] = [];
}