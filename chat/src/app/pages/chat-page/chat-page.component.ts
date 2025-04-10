import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent {
  constructor() { }
  private readonly route = inject(ActivatedRoute);
   private readonly router = inject(Router);
 
   chatRooms: { name: string; id: number }[] = [
     { name: 'Chat Room 1', id: 1 },
     { name: 'Chat Room 2', id: 2 },
     { name: 'Chat Room 3', id: 3 },
     { name: 'Chat Room 4', id: 4 },
     { name: 'Chat Room 5', id: 5 },
     { name: 'Chat Room 6', id: 6 },
     { name: 'Chat Room 7', id: 7 },
     { name: 'Chat Room 8', id: 8 },
     { name: 'Chat Room 9', id: 9 },
     { name: 'Chat Room 10', id: 10 }
   ];
 
   selectedChatRoom: { name: string; id: number } | null = null;
 
   selectRoom(chatRoom: { name: string; id: number }) {
     this.selectedChatRoom = chatRoom;
     this.router.navigate(['../chatroom'], {relativeTo: this.route, queryParams: { chatRoomId: chatRoom.id }});
   }
 
   chatMessages: { sender: string; message: string }[] = [];
 
   sendMessage(sender: string, message: string) {
     this.chatMessages.push({ sender, message });
   }
 
   receiveMessage(sender: string, message: string) {
     this.chatMessages.push({ sender, message });
   }

   clearChat() {
     this.chatMessages = [];
   }

   getChatMessages() {
     return this.chatMessages;
   }
 
}