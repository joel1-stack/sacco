import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from './api';

@Injectable({
  providedIn: 'root'
})
export class Notification {
  constructor(private api: Api) {}

  getNotifications(): Observable<any> {
    return this.api.get('/notifications/');
  }

  markAsRead(id: number): Observable<any> {
    return this.api.put(`/notifications/${id}/read/`, {});
  }

  getUnreadCount(): Observable<any> {
    return this.api.get('/notifications/unread-count/');
  }
}
