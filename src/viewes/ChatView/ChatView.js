import BaseView from "../BaseView/BaseView";
import {GenerateAnswer} from "../../module/GenerateAnswer/GenerateAnswer";


export default class ChatView extends BaseView {
  constructor(element) {
    super(element);
  }

  render(arg = null) {
    let socket;
    if (arg) {
      socket = arg;
    } else {
      socket = new WebSocket(`ws://93.171.139.196:781/chatRoom/?name=${user.username}`);
    }
    const app = this.el;
    const textWindow = document.createElement('textarea');
    textWindow.className = 'chat__textWindow';
    textWindow.id = 'textWindow';
    socket.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      textWindow.textContent += `${data.author}: ${data.body}\n`;
      if (data.author === user.username && !user.admin) {
        const answer = GenerateAnswer(data.body);
        if (answer !== ''){
          textWindow.textContent += `Support: ${answer}\n`;
        }
      }
    };
    app.appendChild(textWindow);
    const inputContainer = document.createElement('form');
    inputContainer.className = 'chat__inputContainer';
    const input = document.createElement('input');
    input.className = 'chat__inputContainer__input';
    const submitButton = document.createElement('button');
    submitButton.className = 'chat__inputContainer__button';
    submitButton.textContent = 'Отправить';
    submitButton.type = 'submit';
    inputContainer.appendChild(input);
    inputContainer.appendChild(submitButton);
    inputContainer.addEventListener('submit', (event) => {
      event.preventDefault();
      socket.send(input.value);
      input.value = '';
    });
    app.appendChild(inputContainer);
  }
}
