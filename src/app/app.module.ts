import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ChatComponent } from "./chat/chat.component";
import { ChatHeaderComponent } from "./chat/header/chat-header/chat-header.component";
import { ChatBodyComponent } from "./chat/message/chat-body/chat-body.component";
import { ChatFooterComponent } from "./chat/footer/chat-footer/chat-footer.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ChatComponent,
    ChatHeaderComponent,
    ChatBodyComponent,
    ChatFooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
