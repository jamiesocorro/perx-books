import { NgModule } from "@angular/core";
import { NavigationBarComponent } from "./navigation-bar.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [NavigationBarComponent],
  imports: [BrowserModule, RouterModule, BrowserAnimationsModule],
  exports: [NavigationBarComponent],
})
export class NavigationBarModule {}
