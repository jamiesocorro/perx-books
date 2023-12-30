import { NgModule } from "@angular/core";
import { BooksComponent } from "./books.component";
import { BooksListComponent } from "./books-list/books-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from "@angular/forms";
import { NavigationBarModule } from "src/app/shared/components/navigation-bar/navigation-bar.module";

@NgModule({
  declarations: [BooksComponent, BooksListComponent],
  imports: [
    BrowserModule,
    MatSortModule,
    MatTableModule,
    MatSelectModule,
    FormsModule,
    NavigationBarModule,
  ],
})
export class BooksModule {}
