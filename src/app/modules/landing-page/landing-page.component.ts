import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { PathService } from "src/app/shared/services/path.service";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
  imports: [MatButtonModule, RouterModule],
  standalone: true,
})
export class LandingPageComponent implements OnInit {
  public constructor(public pathService: PathService) {}

  public ngOnInit(): void {}
}
