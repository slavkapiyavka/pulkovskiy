import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  links = [
    {
      title: "О проекте",
      anchor: "about_project",
    },
    {
      title: "Квартиры на 3D плане",
      anchor: "apartments_plan",
    },
    {
      title: "Квартиры по параметрам",
      anchor: "apartments_parameters",
    },
  ];
  activeLink: string = "";
  compactHeader = false;

  fakeRoute(event: MouseEvent): void {
    this.activeLink = (event.target as HTMLElement).dataset["route"] || "";
  }

  @HostListener("window:scroll")
  private onWindowScroll() {
    const scrollTop = window.scrollY;

    this.compactHeader = scrollTop > 68;
  }
}
