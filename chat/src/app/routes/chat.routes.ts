import { Routes } from "@angular/router";

export const CHAT_ROUTES: Routes = [
    { path: '', redirectTo: 'menu', pathMatch: "full" },
    {
        path: 'menu',
        loadComponent: () => import('../pages/chat-page/chat-page.component').then(c => c.ChatPageComponent)
    },
    {
        path: 'chatroom',
        loadComponent: () => import('../pages/chat-room/chat-room.component').then(c => c.ChatRoomComponent),
    },
    { path: '**', redirectTo: 'menu' }
];