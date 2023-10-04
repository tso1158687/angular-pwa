import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(private http: HttpClient) {

  }

  addPushSubscriber(sub:any) {
      return this.http.post('https://notify-demo.deno.dev/api', sub);
  }

  send() {
      return this.http.post('/api/newsletter', null);
  }
}
