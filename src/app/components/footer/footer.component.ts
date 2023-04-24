import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  links = [
    {
      title: "О проекте",
      anchor: "about_project",
    },
    {
      title: "Совершенство в каждой детали",
      anchor: "excellence",
    },
    {
      title: "Расположение",
      anchor: "location",
    },
    {
      title: "Акции и новости",
      anchor: "promotions_and_news",
    },
    {
      title: "Как купить",
      anchor: "how_to_buy",
    },
    {
      title: "Ход строительства",
      anchor: "building_process",
    },
    {
      title: "Документы",
      anchor: "documents",
    },
  ];
}
