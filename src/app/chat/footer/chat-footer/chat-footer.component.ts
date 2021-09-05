import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ChatMessage } from "src/app/shared/model/chat-message.model";
import { ChatService } from "../../chat.service";

@Component({
  selector: "app-chat-footer",
  templateUrl: "./chat-footer.component.html",
  styleUrls: ["./chat-footer.component.scss"],
})
export class ChatFooterComponent implements OnInit {
  constructor(private chatService: ChatService) {}

  ngOnInit() {}

  sendMessage(messageForm: NgForm) {
    let text = messageForm.value.message;
    if (text) {
      const message: ChatMessage = new ChatMessage(
        "Nawaz",
        text,
        new Date().toUTCString(),
        false
      );
      this.chatService.postMessage(message).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    }
    messageForm.reset();
  }
}
