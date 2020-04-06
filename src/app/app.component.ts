import { Component, Input } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "halodoc-header-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  languages = ["en", "id"];
  currentLang;
  @Input() name: string;

  constructor(private translate: TranslateService) {
    console.log(this.name);
    const currLang = window.localStorage.getItem("lang");
    console.log("from header module", currLang);
    translate.use(currLang);
    this.currentLang = currLang;
  }

  updateLanguageTranslation(lang: string) {
    this.translate.use(lang);
    window.localStorage.setItem("lang", lang);
    this.currentLang = lang;
  }
}
