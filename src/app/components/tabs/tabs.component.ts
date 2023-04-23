import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Tab } from "../../../shared/interfaces/tab";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"],
})
export class TabsComponent {
  @Input() tabs: Tab[] = [];
  @Output() onTabSelectEvent = new EventEmitter<string>();

  public activeTab: string = "all";

  public onTabSelect(link: string): void {
    this.activeTab = link;
    this.onTabSelectEvent.emit(link);
  }
}
