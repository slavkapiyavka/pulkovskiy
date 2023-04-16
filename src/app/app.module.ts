import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/sections/hero/hero.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeroComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
