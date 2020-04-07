import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "halodoc-header-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnChanges {
  languages = ["en", "id"];
  currentLang: string;
  _data: any;

  @Input() data: any;

  constructor(private translate: TranslateService) {}

  ngOnInit() {}

  ngOnChanges(changes) {
    this._data = JSON.parse(changes.data.currentValue);
    console.log("data passed is: ", this._data);
    this.currentLang = this._data.common.translation;
    this.updateLanguageTranslation(this.currentLang);
  }

  updateLanguageTranslation(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
  }
}
