import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomComponent } from "./modules/custom/custom.component";
import { BooksComponent } from "./modules/books/books.component";
import { LandingPageComponent } from "./modules/landing-page/landing-page.component";
import { NavigationBarComponent } from "./shared/components/navigation-bar/navigation-bar.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavigationBarComponent,
    LandingPageComponent,
    BooksComponent,
    CustomComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
