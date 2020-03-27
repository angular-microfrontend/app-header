import { Component, Input } from "@angular/core";

@Component({
  selector: "halodoc-header-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @Input() name: string;

  constructor() {
    console.log(this.name);
  }
}
