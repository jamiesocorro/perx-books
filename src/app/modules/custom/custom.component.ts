import { Component, OnInit } from "@angular/core";
import { NavigationBarComponent } from "src/app/shared/components/navigation-bar/navigation-bar.component";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
@Component({
  selector: "app-custom",
  templateUrl: "./custom.component.html",
  styleUrls: ["./custom.component.scss"],
  imports: [CommonModule, NavigationBarComponent, MatButtonModule],

  standalone: true,
})
export class CustomComponent implements OnInit {
  public title: string = "Default text";
  public isUpdatedText: boolean = false;
  public isUpdatedStyle: boolean = false;
  public constructor() {}

  public ngOnInit(): void {}

  public updateText() {
    this.isUpdatedText = true;
  }

  public updateStyle() {
    this.isUpdatedStyle = true;
  }
}
