import { Component } from '@angular/core';
import { LanguageService } from "../../shared/language.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private bannerContent: string = 'header.banner.content'
  private repetitions: number = 3;
  readonly bannerItems: string[] = Array(this.repetitions).fill(this.bannerContent);

  constructor(public languageService: LanguageService) {}
}
