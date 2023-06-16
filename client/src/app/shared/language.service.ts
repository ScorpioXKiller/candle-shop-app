import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private translationService: TranslateService) { }

  public selectedLanguage(language: string): void {
    this.translationService.use(language);
  }
}
