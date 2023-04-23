import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/sections/hero/hero.component";
import { AboutComponent } from "./components/sections/about/about.component";
import { PromotionsAndNewsComponent } from './components/sections/promotions-and-news/promotions-and-news.component';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeroComponent, AboutComponent, PromotionsAndNewsComponent, TabsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
