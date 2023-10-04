import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { PushService } from './push.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pwa';
  key =
    'BGDRJjAeUMkFC1uFnqR0L5-VlqwV6RxhQedXid6CY95ONU3NCQI82-WvNWc2vc9HV8YOIAC9VsMrMhJhi3XS8MQ';
  constructor(private swPush: SwPush) {}
  ngOnInit(): void {
    // this.getServiceWorker();
    this.push();
  }

  getServiceWorker() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.ready.then((swReg) => {
        swReg.pushManager
          .subscribe({
            userVisibleOnly: true,
            applicationServerKey:
              'BGDRJjAeUMkFC1uFnqR0L5-VlqwV6RxhQedXid6CY95ONU3NCQI82-WvNWc2vc9HV8YOIAC9VsMrMhJhi3XS8MQ',
          })
          .then((subscription) => {
            // 傳送subscription到後端
          });
      });
    }
  }

  push() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      console.log('????');
      if (Notification.permission == 'granted') {
        navigator.serviceWorker.getRegistration().then((reg) => {
          const options: NotificationOptions = {
            icon: 'assets/icons/icon.png',
            image:'assets/icons/dora_bad.jpeg',
            body: 'Please review workzone ID 140 ASAP',
            requireInteraction:true,
            badge:'assets/icons/icon.png',
            vibrate: 3,
            actions: [
              {
                action: 'yes',
                title: 'View',
              },
              {
                action: 'no',
                title: 'Not Now',
              },
            ],
          };
          (reg as ServiceWorkerRegistration).showNotification(
            'Workzone will outdated soon',
            options
          );
          console.log('displayNotification');
        });
      }
    }
  }

  push10(){
    setTimeout(() => {
      this.push()
    }, 5000);
  }
}
