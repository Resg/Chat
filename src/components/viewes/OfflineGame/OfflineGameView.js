import BaseView from '../BaseView/BaseView.js';import PokerUserPanel from "../../PokerUserPanel/PokerUserPanel.js";import {game} from "../../../module/PokerGamePlay.js";import {PokerBotPanel} from "../../PokerBotPanel/PokerBotPanel.js";import {ButtonComponent} from "../../Button/Button";export default class OfflineGameView extends BaseView {  constructor(element) {    super(element);    this.card = null;    this.game = null;  }  static disableButtonPanel(){    const element = document.getElementById('playerPanel');    element.childNodes.forEach(child =>{      // child.className = 'poker-user-panel__button_disabled';      child.disabled = true;    });  }  static enableButtonPanel(text = 'check'){    const element = document.getElementById('playerPanel');    element.childNodes.forEach(child =>{      // child.className = 'poker-user-panel__button';      child.disabled = false;    });    document.getElementById('firstButton').textContent = text;  }  render() {    this.el.innerHTML = '';    const back = document.createElement('a');    back.className  = 'button';    back.textContent = 'back';    back.href = '/';    this.el.appendChild(back);    const botPanel = new PokerBotPanel();    botPanel.updateContext({});    this.el.innerHTML += botPanel.render();    const canvas = document.createElement('canvas');    canvas.className = 'canvas';    canvas.id = 'canvas';    canvas.width = 1024;    canvas.height = 768;    this.el.appendChild(canvas);    this.el.className = 'sect';    const buttonsPanel = new PokerUserPanel();    buttonsPanel.updateContext({      score: window.sessionStorage.playerScore,      bet: window.sessionStorage.playerBet    });    this.el.innerHTML += buttonsPanel.render();    this.game = new game();    this.game.startRound();    const raiseButton = new ButtonComponent({      id: 'raiseButton',      text: 'raise',      class: 'poker-user-panel__button__raise-button',      options: 'hidden'    });    document.getElementById('thirdButton').innerHTML += raiseButton.render();    document.getElementById('firstButton').addEventListener('click', evt => {      OfflineGameView.disableButtonPanel('playerPanel');      this.game[document.getElementById('firstButton').innerText](evt);    });    document.getElementById('secondButton').addEventListener('click', evt => {      OfflineGameView.disableButtonPanel('playerPanel');      this.game.fold(evt);    });    // document.getElementById('thirdButton').addEventListener('click', evt => {    //   OfflineGameView.disableButtonPanel('playerPanel');    //   this.game.fold(evt);    // });    document.getElementById('thirdButton').addEventListener('mouseenter', (evt) => {      evt.preventDefault();      document.getElementById('raiseInput').hidden = false;      document.getElementById('raiseButton').hidden = false;      document.getElementById('raiseText').hidden =true;    });    document.getElementById('thirdButton').addEventListener('mouseleave', (evt) => {      evt.preventDefault();      document.getElementById('raiseInput').hidden = true;      document.getElementById('raiseButton').hidden = true;      document.getElementById('raiseText').hidden = false;    });    document.getElementById('raiseButton').addEventListener('click', (evt) => {      OfflineGameView.disableButtonPanel();      this.game.raise({target: {parentElement: {id: 'playerPanel'}}}, document.getElementById('raiseInput').value);    })  }}// }// let counter = 100;