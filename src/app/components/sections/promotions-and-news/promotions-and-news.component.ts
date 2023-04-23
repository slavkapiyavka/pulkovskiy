import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Tab } from "../../../../shared/interfaces/tab";
import { Article } from "../../../../shared/interfaces/article";

@Component({
  selector: "app-promotions-and-news",
  templateUrl: "./promotions-and-news.component.html",
  styleUrls: ["./promotions-and-news.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromotionsAndNewsComponent {
  tabs: Tab[] = [
    {
      name: "Все",
      link: "all",
    },
    {
      name: "Акции",
      link: "promotion",
    },
    {
      name: "Новости",
      link: "news",
    },
  ];

  articles: Article[] = [
    {
      type: "news",
      title: "Подъезды со смыслом",
      text: "Подъезды «Пулковского» — это сквозные холлы, с двумя прозрачными входными группами и большими лифтами.",
      date: new Date(2022, 2, 22),
      link: "",
    },
    {
      type: "news",
      title: "Ваш персональный ипотечный брокер",
      text: "Знакомьтесь! Абабкова Мария - ипотечный брокер ПАО «Сбербанк» присоединилась к команде ЖК Пулковский.",
      date: new Date(2022, 2, 1),
      link: "",
    },
    {
      type: "promotion",
      title: "Две 3-комнатные квартиры по спеццене",
      text: "Если вы ищете идеальный вариант для проживания семьи, то эти квартиры - отличный выбор.",
      date: new Date(2022, 2, 1),
      link: "",
    },
    {
      type: "news",
      title: "Открыты продажи ЖК «Пулковский»",
      text: "«Пулковский» — это сочетание жилых, коммерческих и культурно-развлекательных пространств в пределах одной локации.",
      date: new Date(2021, 10, 10),
      link: "",
    },
  ];

  activeType = "all";

  public setActiveType(type: string): void {
    this.activeType = type;
  }
}
