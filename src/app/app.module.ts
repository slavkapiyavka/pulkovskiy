import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/sections/hero/hero.component";
import { AboutComponent } from "./components/sections/about/about.component";
import { SliderComponent } from "./components/slider/slider.component";
import { GalleryComponent } from "./components/sections/gallery/gallery.component";
import { NgOptimizedImage } from "@angular/common";

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeroComponent, AboutComponent, SliderComponent, GalleryComponent],
  imports: [BrowserModule, NgOptimizedImage],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
