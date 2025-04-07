import { Routes } from "@angular/router";

export const CHAT_ROUTES: Routes = [
    { path: '', redirectTo: 'menu', pathMatch: "full" },
    {
        path: 'menu',
        loadComponent: () => import('../chat.component').then(c => c.ChatComponent)
    },
    {
        path: 'chatroom',
        loadComponent: () => import('../components/chat-room/chat-room.component').then(c => c.ChatRoomComponent),
    },
    { path: '**', redirectTo: 'menu' }
];