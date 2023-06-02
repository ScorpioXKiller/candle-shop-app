import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {AboutComponent} from "./components/about/about.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {GalleryComponent} from "./components/gallery/gallery.component";

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "contacts", component: ContactsComponent},
  {path: "products", component: ProductListComponent},
  {path: "products/:id", component: ProductDetailsComponent},
  {path: "about", component: AboutComponent},
  {path: "gallery", component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
