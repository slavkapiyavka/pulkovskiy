import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"],
})
export class SliderComponent {
  public slides = [
    {
      name: "first-slide.png",
      altText: "random image from the internet",
    },
    {
      name: "second-slide.webp",
      altText: "random image from the internet",
    },
    {
      name: "third-slide.webp",
      altText: "random image from the internet",
    },
  ];

  public currentSlide = 0;

  public onBackwardClick() {
    console.log(this.currentSlide);
  }

  public onForwardClick() {
    console.log(this.currentSlide);
  }
}
