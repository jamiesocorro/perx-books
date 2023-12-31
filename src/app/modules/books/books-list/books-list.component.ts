import { Component, Input, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { BooksModel } from "src/app/shared/models/books.model";
import { BooksService } from "src/app/shared/services/books.service";
import books from "@mockdata/example.json";
import { TableHeaderModel } from "src/app/shared/models/table-header.model";
import { MatSortModule, Sort } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-books-list",
  templateUrl: "./books-list.component.html",
  styleUrls: ["./books-list.component.scss"],
  imports: [MatSortModule, MatTableModule, DatePipe],
  standalone: true,
})
export class BooksListComponent implements OnInit {
  public selectedHeader: TableHeaderModel = {
    sortOrder: "",
    sortProp: "desc",
  };
  public headers = [
    {
      label: "",
      sortable: false,
    },
    {
      label: "Title",
      sortProp: "title",
      sortable: true,
    },
    {
      label: "Type",
      sortProp: "type",
      sortable: true,
    },
    {
      label: "Date Created",
      sortProp: "created_date",
      sortable: true,
    },
  ];
  public books$: Observable<BooksModel[]> = of(books.data);
  public sortedData: BooksModel[] = [];
  public sortedDataBackup: BooksModel[] = [];
  public displayedColumns: string[] = ["image", "title", "type", "created_at"];
  @Input() public bookType: string = "";
  public constructor(public booksService: BooksService) {}

  public ngOnInit(): void {
    this.books$.subscribe((data: BooksModel[]) => {
      this.sortedData = data.slice();
      this.sortedDataBackup = this.sortedData;
    });
  }

  filterBooks(type: string) {
    this.sortedData = this.sortedDataBackup;

    if (type === "All") {
      this.sortedData = this.sortedDataBackup;
    } else {
      const filteredBooks = this.sortedData.filter(
        (b) => b.attributes.display_properties.type === type
      );
      this.sortedData = filteredBooks;
    }
  }

  sortData(sort: Sort) {
    const data = this.sortedData.slice();
    if (!sort.active || sort.direction === "") {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active.toLowerCase()) {
        case "title":
          return this.compare(
            a.attributes.content,
            b.attributes.content,
            isAsc
          );
        case "type":
          return this.compare(a.type, b.type, isAsc);
        case "created_date":
          return this.compare(
            a.attributes.created_date,
            b.attributes.created_date,
            isAsc
          );
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
