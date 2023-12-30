import { Injectable } from "@angular/core";
import books from "@mockdata/example.json";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BooksService {
  constructor() {}

  public getBooks() {
    return of(books.data);
  }
}
