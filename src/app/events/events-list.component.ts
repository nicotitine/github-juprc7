import { Component } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService } from "ngx-toastr";

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
  constructor(
    private eventService: EventService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
    console.log(this.events);
  }

  handleThumbnailClick(name: string) {
    this.toastr.success(name);
  }
}
