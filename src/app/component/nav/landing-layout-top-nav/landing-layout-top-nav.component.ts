import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../../service/theme/theme.service';

@Component({
  selector: 'app-landing-layout-top-nav',
  templateUrl: './landing-layout-top-nav.component.html',
  styleUrls: ['./landing-layout-top-nav.component.scss']
})
export class LandingLayoutTopNavComponent implements OnInit {


  brand = {
    brandLogo: '',
  };

  constructor(
    private router: Router,
    private themeService: ThemeService
  ) {
    this.brand = this.themeService.brand;
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
