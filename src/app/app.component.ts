import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { PushService } from './push.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pwa';
  // constructor(private sw: SwPush) {}
  // ngOnInit(): void {
  //   this.askForNotificationPermission();
  //   this.displayNotification();
  // }
  // displayNotification() {
  //   if ('serviceWorker' in navigator) {
  //     console.log('????');
  //     var options = {
  //       body: '歡迎進入30天PWA的世界',
  //       // icon: '/src/images/icons/demo-icon96.png',
  //       // image: '/src/images/demo.JPG',

  //       // lang: 'zh-Hant', //BCP 47
  //       // vibrate: [100, 50, 200],
  //       // badge: '/src/images/icons/demo-icon96.png',
  //       // tag: 'confirm-notification',
  //       // renotify: true,
  //       // actions: [
  //       //     { action: 'confirm', title: '確認', icon: '/src/images/icons/demo-icon96.png'},
  //       //     { action: 'cancel', title: '取消', icon: '/src/images/icons/demo-icon96.png'}
  //       // ]
  //     };
  //     // this.sw.messages.subscribe(e=>console.log(e))
  //     console.log(navigator.serviceWorker.ready);
  //     navigator.serviceWorker.ready.then((sw) => {
  //       // sw.pushManager.getSubscription().then(e=>e.)
  //       console.log(sw);
  //       sw.showNotification('訂閱成功！！！', options);
  //     });
  //   }
  // }

  // askForNotificationPermission() {
  //   Notification.requestPermission(function (status) {
  //     console.log('User Choice', status);
  //     if (status !== 'granted') {
  //       console.log('推播允許被拒絕了!');
  //     } else {
  //       console.log('gogog');
  //     }
  //   });
  // }
}
