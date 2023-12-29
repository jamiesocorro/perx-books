import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { BooksComponent } from './modules/books/books.component';
import { CustomComponent } from './modules/custom/custom.component';
import { LandingPageModule } from './modules/landing-page/landing-page.module';

@NgModule({
  declarations: [AppComponent, BooksComponent, CustomComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LandingPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
