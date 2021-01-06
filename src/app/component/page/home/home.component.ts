import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  result: any;
  socket: any;
  form: any;

  constructor(
    private formBuilder: FormBuilder,
    public router: Router
  ) {
    this.form = this.formBuilder.group({
      id: '',
      temperature: ''
    })
  }

  ngOnInit(): void {
    this.socket = io();
    this.updateGreenhouses();
  }

  updateGreenhouses(): void {
    this.socket.on('getGreenhouses', (data) => {
      console.log(data);
      this.result = data;
     });
  }

  onSubmit(value) {
    console.log(value);
    this.socket.emit('updateGreenhouse', value);
  }
}
