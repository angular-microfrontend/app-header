import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MultiTranslateHttpLoader } from "ngx-translate-multi-http-loader";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";

import { AppComponent } from "./app.component";

export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    {
      prefix: "http://localhost:7454/api/",
      suffix: ".json",
    },
  ]);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent],
})
export class AppModule {
  customElement;
  constructor(private injector: Injector) {
    this.customElement = createCustomElement(AppComponent, { injector });
    if (!customElements.get("halodoc-header-root")) {
      customElements.define("halodoc-header-root", this.customElement);
    } else {
      console.warn(`${name} has been defined twice`);
    }
  }

  ngDoBootstrap() {
    // if (!customElements.get("halodoc-header-root")) {
    //   customElements.define("halodoc-header-root", this.customElement);
    // }
  }
}
