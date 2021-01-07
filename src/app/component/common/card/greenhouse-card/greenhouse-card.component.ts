import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-greenhouse-card',
  templateUrl: './greenhouse-card.component.html',
  styleUrls: ['./greenhouse-card.component.scss']
})
export class GreenhouseCardComponent implements OnInit {
  @Input() title: string = 'Title';


  constructor() {
  }

  ngOnInit(): void {
  }
}
