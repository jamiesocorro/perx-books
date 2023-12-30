import { Component, Input, OnInit } from "@angular/core";
import { PathService } from "../../services/path.service";
import { Router, RouterModule } from "@angular/router";
import {
  AnimationEvent,
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-navigation-bar",
  templateUrl: "./navigation-bar.component.html",
  styleUrls: ["./navigation-bar.component.scss"],
  imports: [RouterModule, CommonModule],
  standalone: true,
  animations: [
    trigger("fade", [
      state(
        "hidden",
        style({
          opacity: 0,
        })
      ),
      state(
        "visible",
        style({
          opacity: 1,
        })
      ),
      transition("hidden <=> visible", [animate("0.9s ease")]),
    ]),
  ],
})
export class NavigationBarComponent implements OnInit {
  @Input() title: string = "";
  public currentState = "hidden";
  public currentIndex = 1;
  public nextIndex = 0;
  public navigations = [
    { title: "Books", link: this.pathService.books },
    { title: "Custom", link: this.pathService.custom },
  ];
  public constructor(private pathService: PathService, public router: Router) {}

  public ngOnInit(): void {}

  public animationFinished(event: AnimationEvent) {
    if (event.fromState === "void" && event.toState === "hidden") {
      this.currentState = "visible";
    } else if (event.fromState === "visible" && event.toState === "hidden") {
      this.currentState = "visible";
      this.currentIndex = this.nextIndex;
    }
  }
}
