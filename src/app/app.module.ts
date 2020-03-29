import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  customElement;
  constructor(private injector: Injector) {
    this.customElement = createCustomElement(AppComponent, { injector });
    customElements.define("halodoc-header-root", this.customElement);
  }

  ngDoBootstrap() {
    // if (!customElements.get("halodoc-header-root")) {
    //   customElements.define("halodoc-header-root", this.customElement);
    // }
  }
}
