import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button1',
  templateUrl: './button1.component.html',
  styleUrls: ['./button1.component.scss']
})
export class Button1Component implements OnInit {

  @Input() text: string = 'Button';
  constructor() {
  }

  ngOnInit(): void {
  }
}
