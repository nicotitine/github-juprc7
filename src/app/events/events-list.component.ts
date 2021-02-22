import { Component } from "@angular/core";
import { EventService } from "./shared/event.service";

@Component({
  selector: "events-list",
  template: `
    <div class="container">
      <h1>Upcoming Angular Events</h1>
      <hr />
      <event-thumbnail
        *ngFor="let event of events"
        [event]="event"
      ></event-thumbnail>
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
}
