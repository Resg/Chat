import User from "./module/User/UserContainer";
import Router from "./module/Router/router";
import ChatView from "./viewes/ChatView/ChatView";
import AdminView from "./viewes/AdminView/AdminView";


window.user = new User();
window.router = new Router(document.getElementById('chat'));
router.register('/', ChatView)
    .register('/admin', AdminView);
user.checkAuth().then(() => {
  if (user.admin){
    router.start();
    router.open('/admin');
  }  else {
    router.start();
    router.open('/');
  }
});


