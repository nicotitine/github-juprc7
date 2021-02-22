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

import { EventService } from "./events/shared/event.service";
import { ToastrModule } from "ngx-toastr";

import { routes } from "./routes";

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
    EventDetailsComponent
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule {}
