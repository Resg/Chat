import Router from './module/router.js';
import StartScreen from './components/viewes/StartScreen/StartScreen.js';
import SignUpScreen from './components/viewes/SignUpScreen/SignUpScreen.js';
import SignInScreen from './components/viewes/SignInScreen/SignInScreen.js';
import ProfileView from './components/viewes/Profile/Profile.js';
import NotFoundView from './components/viewes/NotFoundView/NotFoundView.js';

const application = document.getElementById('application');
window.router = new Router(application);

window.router.register('/', StartScreen)
    .register('/signUp', SignUpScreen)
    .register('/signIn', SignInScreen)
    .register('/profile', ProfileView)
    .register('/notFound', NotFoundView);
console.log(router.routes);
window.router.start();
