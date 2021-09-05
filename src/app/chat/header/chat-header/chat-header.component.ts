import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-chat-header",
  templateUrl: "./chat-header.component.html",
  styleUrls: ["./chat-header.component.scss"],
})
export class ChatHeaderComponent implements OnInit {
  date: string = new Date().toUTCString();
  constructor() {}

  ngOnInit() {}
}
