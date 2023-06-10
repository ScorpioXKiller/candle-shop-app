import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";

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
    InstagramFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
