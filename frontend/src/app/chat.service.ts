import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';


@Injectable()
export class ChatService {

  socket;
  constructor() {
    this.socket = io.connect('http://localhost:4000');
    this.socket.on('chat', function (data) {
      this.data = data;
    })
  }

  sendtoserver(me) {
    this.socket.emit('chat', {
      message: me.msg,
      name: me.name
    });
  }

}