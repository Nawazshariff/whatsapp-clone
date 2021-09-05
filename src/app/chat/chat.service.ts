import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { ChatMessage, Message } from "../shared/model/chat-message.model";
@Injectable({
  providedIn: "root",
})
export class ChatService {
  baseURL: string = environment.server.url;
  constructor(private http: HttpClient) {}

  getAllMessages() {
    return this.http.get<Message[]>(`${this.baseURL}/messages/sync`);
  }

  postMessage(message: Message) {
    return this.http.post<ChatMessage>(`${this.baseURL}/message/new`, message);
  }
}
