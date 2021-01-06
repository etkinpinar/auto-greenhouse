import {Component, Input, OnInit} from '@angular/core';
import {LoadingService} from '../../../../service/loading/loading.service';

@Component({
  selector: 'app-greenhouse-card',
  templateUrl: './greenhouse-card.component.html',
  styleUrls: ['./greenhouse-card.component.scss']
})
export class GreenhouseCardComponent implements OnInit {
  @Input() title: string = 'Title';

  loading: boolean = false;

  constructor(private loadingService: LoadingService) {
    this.loadingService.sharedLoading.subscribe(loading => this.loading = loading);
  }

  ngOnInit(): void {
  }
}
