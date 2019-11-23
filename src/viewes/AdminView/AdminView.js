import BaseView from "../BaseView/BaseView";
import AjaxModule from '../../module/AjaxModule/ajax'

export default class AdminView extends BaseView {
  constructor(element) {
    super(element)
  }

  render(arg = null) {
    AjaxModule.getRooms().then((res)=>{
      return res.text();
    }).then((resText)=>{
      return JSON.parse(resText).rooms;
    }).then((rooms)=>{
      console.log(rooms);
      const divak = document.createElement('div');
      divak.className = 'column';
      rooms.forEach((room) => {
        const listItem = document.createElement('div');
        listItem.className = 'room';
        listItem.textContent = `${room}`;
        divak.appendChild(listItem);
        listItem.addEventListener('click', (event) => {
          event.preventDefault();
          const socket = new WebSocket(`ws://93.171.139.196:781/chatRoom/?name=${user.username}&room=${room}`);
          router.open('/', socket);
        });
      });
      this.el.appendChild(divak);
    });
  }
}