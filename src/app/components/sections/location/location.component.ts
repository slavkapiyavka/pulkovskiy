import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Tab } from "../../../../shared/interfaces/tab";

declare const ymaps: any;

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.scss"],
})
export class LocationComponent implements OnInit {
  map: any;
  latitude = 52.354225;
  longitude = 104.224625;
  zoom = 17;
  @ViewChild("yamaps")
  mapElement!: ElementRef;

  public tabs: Tab[] = [
    {
      name: "Все",
      link: "all",
    },
    {
      name: "Рестораны",
      link: "all",
    },
    {
      name: "Музеи",
      link: "all",
    },
    {
      name: "Магазины",
      link: "all",
    },
    {
      name: "Больницы",
      link: "all",
    },
    {
      name: "Спорт",
      link: "all",
    },
    {
      name: "Театр",
      link: "all",
    },
    {
      name: "Ж/Д вокзал",
      link: "all",
    },
  ];

  ngOnInit() {
    ymaps.ready().done(() => this.createMap());
  }

  public setActiveLocationType(type: string): void {
    console.log(type);
  }

  private createMap(): void {
    this.map = new ymaps.Map("map", {
      center: [this.latitude, this.longitude],
      zoom: this.zoom,
      controls: [],
    });

    const placeMark = new ymaps.Placemark([this.latitude, this.longitude]);
    this.map.geoObjects.add(placeMark);
  }
}
