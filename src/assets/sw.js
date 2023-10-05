self.addEventListener("notificationclick", (event) => {
    console.log('add event')
    console.log(event)
  const notification = event.notification;
  const action = event.action;
  const link = notification.data.link;
//   if (action !== "close") {
    if (link) {
      clients.openWindow(link);
    }
//   }
  notification.close();
  console.log("notificationclick action is", action);
});
