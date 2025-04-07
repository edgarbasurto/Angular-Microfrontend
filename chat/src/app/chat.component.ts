import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  //agregar router al contructor
  constructor(private router: Router, private route: ActivatedRoute) { }

  //crear los chatrooms
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
    this.router.navigate(['chatroom']);
  }

  // Define a property to hold the chat messages
  chatMessages: { sender: string; message: string }[] = [];

  // Method to send a message
  sendMessage(sender: string, message: string) {
    this.chatMessages.push({ sender, message });
  }

  // Method to receive a message
  receiveMessage(sender: string, message: string) {
    this.chatMessages.push({ sender, message });
  }
  // Method to clear the chat messages
  clearChat() {
    this.chatMessages = [];
  }
  // Method to get the chat messages
  getChatMessages() {
    return this.chatMessages;
  }


}
