import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { IntroComponent } from './components/intro/intro.component';
import { ScentsDemoComponent } from './components/scents-demo/scents-demo.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { ProductionInfoComponent } from './components/production-info/production-info.component';
import { InstagramFeedComponent } from './components/instagram-feed/instagram-feed.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { LanguageService } from './shared/language.service';
import { SubheaderComponent } from './components/subheader/subheader.component';
import { BannerComponent } from './components/banner/banner.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailsComponent,
    AboutComponent,
    ContactsComponent,
    GalleryComponent,
    IntroComponent,
    ScentsDemoComponent,
    CompanyInfoComponent,
    ProductionInfoComponent,
    InstagramFeedComponent,
    FooterComponent,
    SubheaderComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en-US',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    LanguageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
