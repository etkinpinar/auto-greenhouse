import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../../service/theme/theme.service';
import { LoadingService } from '../../../service/loading/loading.service';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {

  loading: boolean = false;

  constructor(
    private router: Router,
    private themeService: ThemeService,
    private loadingService: LoadingService
  ) {
    this.loadingService.sharedLoading.subscribe(loading => this.loading = loading);
  }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['/']).then(() => {
      return true;
    });
  }

  switchTheme() {
    this.themeService.switchDarkTheme();
  }
}
