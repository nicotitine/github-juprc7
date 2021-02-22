import { Component, Input } from "@angular/core";

@Component({
  selector: "sessions-list",
  templateUrl: "./sessions-list.component.html"
})
export class SessionsListComponent {
  @Input() session: any;
}
