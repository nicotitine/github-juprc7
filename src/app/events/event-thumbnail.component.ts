import { Component, Input } from "@angular/core";
import { IEvent } from "./shared/event.model";
@Component({
  selector: "event-thumbnail",
  template: `
    <div class="well hoverwell thumbnail" routerLink="/events/{{ event.id }}">
      <h2>{{ event?.name }}</h2>
      <div>Date: {{ event?.date }}</div>
      <div>Time: {{ event?.time }}</div>
      <div>Price: \${{ event?.price }}</div>
      <div>
        <span>Location: {{ event?.location?.address }}</span>
        <span class="pad-left">{{ event?.location?.city }}, </span>
        <span>{{ event?.location?.country }}</span>
      </div>
    </div>
  `,
  styles: [
    `
      .pad-left {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }
    `
  ]
})
export class EventThumbnailComponent {
  @Input() event: IEvent;
}
