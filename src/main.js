import User from "./module/User/UserContainer";


window.user = new User();
user.checkAuth();


const socket = new WebSocket('ws://93.171.139.196:781/chatRoom/');
const app = document.getElementById('chat');
const textWindow = document.createElement('textarea');
textWindow.className = 'chat__textWindow';
textWindow.id = 'textWindow';
socket.onmessage = (msg) => {
  const data = JSON.parse(msg.data);
  textWindow.textContent += `${data.author}: ${data.body}\n`;
};
app.appendChild(textWindow);
const inputContainer = document.createElement('div');
inputContainer.className = 'chat__inputContainer';
const input = document.createElement('input');
input.className = 'chat__inputContainer__input';
const submitButton = document.createElement('button');
submitButton.className = 'chat__inputContainer__button';
submitButton.textContent = 'Отправить';
submitButton.type = 'submit';
inputContainer.appendChild(input);
inputContainer.appendChild(submitButton);
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const msg = JSON.stringify({user.username: input.value})
  socket.send(msg);
  input.value = '';
});
app.appendChild(inputContainer);