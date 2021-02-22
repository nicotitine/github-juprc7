import { Component } from "@angular/core";
import { EventService } from "./shared/event.service";

declare let toastr;

@Component({
  selector: "events-list",
  template: `
    <div class="container">
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail
            (click)="handleThumbnailClick(event.name)"
            [event]="event"
          ></event-thumbnail>
        </div>
      </div>
    </div>
  `
})
export class EventsListComponent {
  events;
  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
    console.log(this.events);
  }

  handleThumbnailClick(name: string) {
    toastr.success(name);
  }
}
