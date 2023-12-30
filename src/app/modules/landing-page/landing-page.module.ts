import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { LandingPageComponent } from "./landing-page.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
@NgModule({
  declarations: [LandingPageComponent],
  imports: [BrowserModule, MatButtonModule, RouterModule],
})
export class LandingPageModule {}
