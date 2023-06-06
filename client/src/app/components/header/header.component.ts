import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private bannerContent: string = 'Get 10% off when you order 3 or more!'
  private repetitions: number = 3;
  readonly bannerItems: string[] = Array(this.repetitions).fill(this.bannerContent);
}
