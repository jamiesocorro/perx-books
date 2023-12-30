import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PathService {
  landingPage = "/landing-page";
  books = "/books";
  custom = "/custom";
}
