import { CommonModule } from "@angular/common";
import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSelectChange, MatSelectModule } from "@angular/material/select";
import { NavigationBarComponent } from "src/app/shared/components/navigation-bar/navigation-bar.component";

@Component({
  selector: "app-books-header",
  templateUrl: "./books-header.component.html",
  styleUrls: ["./books-header.component.scss"],
  imports: [
    NavigationBarComponent,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  standalone: true,
})
export class BooksHeaderComponent implements OnInit {
  public selectedValue: string = "All";
  public bookCovers: string[] = ["All", "Hard cover", "Soft cover"];
  @Output() public clicked = new EventEmitter();
  public constructor() {}

  public ngOnInit(): void {}

  public filterBooks(event?: any) {
    this.clicked.emit(this.selectedValue);
  }
}
