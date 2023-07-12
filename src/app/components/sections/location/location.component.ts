import { Component, OnInit } from "@angular/core";
import { Tab } from "../../../../shared/interfaces/tab";

interface Placemark {
  geometry: number[];
  properties: ymaps.IPlacemarkProperties;
  options: ymaps.IPlacemarkOptions;
}

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.scss"],
})
export class LocationComponent implements OnInit {
  centerPlaceMark: number[] = [52.354398, 104.224534];

  clustererOptions: ymaps.IClustererOptions = {
    gridSize: 32,
    clusterDisableClickZoom: true,
    preset: "islands#greenClusterIcons",
  };

  placemarks: Placemark[] = [];

  points: number[][] = [[52.354398, 104.224534]];
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

  ngOnInit(): void {
    this.points.forEach((geometry, index) => {
      this.placemarks.push({
        geometry,
        properties: {
          hintContent: "Содержание всплывающей подсказки",
          balloonContent: "Содержание балуна",
        },
        options: {
          preset: "islands#greenDotIcon",
        },
      });
    });
  }

  public setActiveLocationType(type: string): void {
    console.log(type);
  }
}
