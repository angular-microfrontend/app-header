import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  EventEmitter,
} from "@angular/core";
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
  @Output() translationChanged = new EventEmitter();

  constructor(private translate: TranslateService) {}

  ngOnInit() {}

  ngOnChanges(changes) {
    this._data = JSON.parse(changes.data.currentValue);
    this.currentLang = this._data.common.translation;
    this.updateLanguageTranslation(this.currentLang);
  }

  updateLanguageTranslation(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    this.translationChanged.emit({ translationId: lang });
  }
}
