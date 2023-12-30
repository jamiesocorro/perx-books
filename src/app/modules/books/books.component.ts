import { Component, OnInit } from "@angular/core";
import { BooksListComponent } from "./books-list/books-list.component";
import { NavigationBarComponent } from "src/app/shared/components/navigation-bar/navigation-bar.component";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.scss"],
  imports: [BooksListComponent, NavigationBarComponent],
  standalone: true,
})
export class BooksComponent implements OnInit {
  public constructor() {}

  public ngOnInit(): void {}
}
