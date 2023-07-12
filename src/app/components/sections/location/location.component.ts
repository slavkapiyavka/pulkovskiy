import { Component } from "@angular/core";
import { Tab } from "../../../../shared/interfaces/tab";

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.scss"],
})
export class LocationComponent {
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

  public setActiveLocationType(type: string): void {
    console.log(type);
  }
}
