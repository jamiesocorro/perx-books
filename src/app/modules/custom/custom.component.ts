import { Component, OnInit } from "@angular/core";
import { NavigationBarComponent } from "src/app/shared/components/navigation-bar/navigation-bar.component";

@Component({
  selector: "app-custom",
  templateUrl: "./custom.component.html",
  styleUrls: ["./custom.component.scss"],
  imports: [NavigationBarComponent],
  standalone: true,
})
export class CustomComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
