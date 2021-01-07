import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button2',
  templateUrl: './button2.component.html',
  styleUrls: ['./button2.component.scss']
})
export class Button2Component implements OnInit {

  @Input() text: string = '';
  @Input() icon: string = 'fab fa-angular';
  @Input() rounded: boolean = false;


  constructor() {
  }

  ngOnInit(): void {
  }
}
