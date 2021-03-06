import { Routes } from "@angular/router";
import { EventsListComponent } from "./events/events-list.component";
import { CreateEventComponent } from "./events/create-event.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { Error404Component } from "./errors/404.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";
import { EventListResolver } from "./events/event-list-resolver.service";
import { CreateSessionComponent } from "./events/sessions/create-session.component";

export const routes: Routes = [
  {
    path: "events",
    component: EventsListComponent,
    resolve: { events: EventListResolver }
  },
  {
    path: "events/new",
    component: CreateEventComponent,
    canDeactivate: ["canDeactivateCreateEvent"]
  },
  {
    path: "events/:id",
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator]
  },
  { path: "404", component: Error404Component },
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then(m => m.UserModule)
  },
  { path: "", redirectTo: "events", pathMatch: "full" },
  { path: "sessions/new", component: CreateSessionComponent }
];
