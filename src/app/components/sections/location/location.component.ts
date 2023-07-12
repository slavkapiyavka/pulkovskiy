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
      link: "restaurants",
    },
    {
      name: "Музеи",
      link: "museums",
    },
    {
      name: "Магазины",
      link: "shops",
    },
    {
      name: "Больницы",
      link: "hospitals",
    },
    {
      name: "Спорт",
      link: "sports",
    },
    {
      name: "Театр",
      link: "theaters",
    },
    {
      name: "Ж/Д вокзал",
      link: "railway-stations",
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
