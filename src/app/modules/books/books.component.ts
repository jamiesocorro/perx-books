import { Component, OnInit, ViewChild } from "@angular/core";
import { BooksListComponent } from "./books-list/books-list.component";
import { NavigationBarComponent } from "src/app/shared/components/navigation-bar/navigation-bar.component";
import { BooksHeaderComponent } from "./books-header/books-header/books-header.component";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.scss"],
  imports: [BooksListComponent, NavigationBarComponent, BooksHeaderComponent],
  standalone: true,
})
export class BooksComponent implements OnInit {
  @ViewChild(BooksListComponent) public bookList: BooksListComponent;
  public selectedBookType: string = "Hard cover";
  public constructor() {}

  public ngOnInit(): void {}

  public updateBookCovers(book: any) {
    this.bookList.filterBooks(book);
  }
}
