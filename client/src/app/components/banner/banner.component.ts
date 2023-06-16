import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  private bannerContent: string = 'banner.content'
  private repetitions: number = 3;
  readonly bannerItems: string[] = Array(this.repetitions).fill(this.bannerContent);
}
