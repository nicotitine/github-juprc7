import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { NavBarComponent } from "./nav/nav-bar.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Error404Component } from "./errors/404.component";

import { EventService } from "./events/shared/event.service";
import { ToastrModule } from "ngx-toastr";

import { routes } from "./routes";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";
import { CreateEventComponent } from "./events/create-event.component";
import { EventListResolver } from "./events/event-list-resolver.service";
import { AuthService } from "./user/auth.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    Error404Component
  ],
  providers: [
    EventService,
    EventRouteActivator,
    { provide: "canDeactivateCreateEvent", useValue: checkDirtyState },
    EventListResolver,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm("Unsaved data. Are you sure you want to leave ? ");
  return true;
}
