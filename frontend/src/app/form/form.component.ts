import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChatService } from '../chat.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  ab = [{name:"yash",message:"Hello World!"}];

  reg = new FormGroup({
    name: new FormControl(),
    msg: new FormControl()
  })


  constructor(private chatservice: ChatService) {

  }

  ngOnInit() {

    this.chatservice.socket.on('chat', (data) => {

      this.ab.push(data);
    });

  }
  send() {

    this.chatservice.sendtoserver(this.reg.value);

    this.reg.setValue({
      name: '',
      msg: ''
    })
  }

}