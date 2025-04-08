import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // Initialize chat room messages from local storage
    const storedMessages = localStorage.getItem('chatRoomMessages');
    if (storedMessages) {
      this.chatRoomMessages = JSON.parse(storedMessages);
    } else {
      this.chatRoomMessages = [];
    }
  }
  
 @Input() chatRoomId: number | null = null;
 @Input() chatRoomName: string | null = null;
 @Input() chatRoomDescription: string | null = null;
 @Input() chatRoomMembers: { name: string; id: number }[] | null = null;
 @Input() chatRoomMessages: { sender: string; text: string }[] | null = null;
 @Input() chatRoomLastMessage: { sender: string; text: string } | null = null;
 @Input() chatRoomFirstMessage: { sender: string; text: string } | null = null;  

 
 messageText: string = '';


 sendMessage(event: Event) {
  event.preventDefault();
  this.chatRoomMessages?.push({ sender: 'me', text: this.messageText });
  if (this.messageText.trim()) {
    this.messageText = '';
  }
  localStorage.setItem('chatRoomMessages', JSON.stringify(this.chatRoomMessages));
  this.chatRoomMessages = JSON.parse(localStorage.getItem('chatRoomMessages') ?? '[]');
}
 
 receiveMessage(sender: string, text: string) {
   if (this.chatRoomMessages) {
     this.chatRoomMessages.push({ sender, text });
   }
 }
 clearChat() {
   if (this.chatRoomMessages) {
     this.chatRoomMessages = [];
   }
 }
 getChatMessages() {
   return this.chatRoomMessages;
 }
}
