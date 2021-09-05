import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Message } from "src/app/shared/model/chat-message.model";
import { PusherService } from "src/app/shared/pusher.service";
import { ChatService } from "../../chat.service";

@Component({
  selector: "app-chat-body",
  templateUrl: "./chat-body.component.html",
  styleUrls: ["./chat-body.component.scss"],
})
export class ChatBodyComponent implements OnInit {
  messages: Message[] = [];

  constructor(
    private pService: PusherService,
    private chatService: ChatService
  ) {}

  ngOnInit() {
    this.chatService.getAllMessages().subscribe((messages: Message[]) => {
      this.messages = messages.slice();
    });
    this.pService.channel.bind("inserted", (data) => {
      this.messages.push(data);
    });
  }
}
