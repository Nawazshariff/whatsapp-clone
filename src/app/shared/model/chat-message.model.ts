export interface Message {
  userName: string;
  message: string;
  timestamp: string;
  recieved: Boolean;
}

export class ChatMessage implements Message {
  constructor(
    public userName,
    public message,
    public timestamp,
    public recieved
  ) {}
}
