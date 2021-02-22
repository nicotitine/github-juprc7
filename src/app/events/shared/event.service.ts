import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { IEvent } from "./event.model";

@Injectable()
export class EventService {
  getEvents(): Observable<IEvent[]> {
    let subject = new Subject<IEvent[]>();
    setTimeout(() => {
      subject.next(EVENTS);
      subject.complete();
    }, 100);
    return subject;
  }

  getEvent(id: number): IEvent {
    return EVENTS.find(event => event.id === id);
  }
}

const EVENTS: IEvent[] = [
  {
    id: 1,
    name: "Angular Connect",
    date: new Date(9 / 26 / 2036),
    time: "10.00 am",
    price: 599.99,
    imageUrl:
      "https://github.com/jmcooper/angular-fundamentals-files/blob/master/src/assets/images/angularconnect-shield.png?raw=true",
    location: {
      address: "1057 DT",
      city: "London",
      country: "UK"
    },
    sessions: [
      {
        id: 1,
        name: "Using Angular 4 Pipes",
        presenter: "Peter Bacon Darwin",
        duration: 1,
        level: "Intermediate",
        abstract: `Learn all about the new pipes in Angular 4
        both
      how to write them, and how to get the new AI CLI to write them for you. Given by the famous PBD, president of Angular University (formely Oxford University)`,
        voters: ["bradgreen", "igorminar", "martinfowler"]
      },
      {
        id: 2,
        name: "Angular performance",
        presenter: "Igor Minar",
        duration: 2,
        level: "Advenced",
        abstract: `with the right management they can be even more productive, without overworking them. In this session, I'll show you how to get the best results from the talent you already have on staf.`,
        voters: ["johnpapa", "bardgreen", "igorminar", "martinfowler"]
      },
      {
        id: 3,
        name: "Angular 4 Performance Metrics",
        presenter: "Rob Wormald",
        duration: 2,
        level: "Advenced",
        abstract: `Angular 4 Performance is hot. In this session we'll see how Angular gets such great performance by preloading data on your users devices before they even hit your site using new predictive algorithms and thought reading software built into Angular 4.`,
        voters: []
      },
      {
        id: 4,
        name: "Angular 5 Look Ahead",
        presenter: "Brad Green",
        duration: 2,
        level: "Advenced",
        abstract: `Even though Angular 5 is still 6 years away, we all want to know it.`,
        voters: []
      }
    ]
  },
  {
    id: 2,
    name: "ng-nl",
    date: new Date(5 / 15 / 2037),
    time: "9.00 am",
    price: 950.0,
    imageUrl:
      "https://github.com/jmcooper/angular-fundamentals-files/blob/master/src/assets/images/ng-nl.png?raw=true",
    location: {
      address: "The NG-NL Convention Center & Scuba Shop",
      city: "Amsterdam",
      country: "Netherlands"
    },
    sessions: []
  },
  {
    id: 3,
    name: "ng-conf 2037",
    date: new Date(5 / 4 / 2037),
    time: "9.00 am",
    price: 759.0,
    imageUrl:
      "https://github.com/jmcooper/angular-fundamentals-files/blob/master/src/assets/images/ng-conf.png?raw=true",
    location: {
      address: "The Palatial America Hotel",
      city: "Salt Lake City",
      country: "USA"
    },
    sessions: []
  },
  {
    id: 4,
    name: "UN Angular Summit",
    date: new Date(6 / 10 / 2037),
    time: "8.00 am",
    price: 800.0,
    imageUrl:
      "https://github.com/jmcooper/angular-fundamentals-files/blob/master/src/assets/images/basic-shield.png?raw=true",
    location: {
      address: "The UN Angular Center",
      city: "New-York",
      country: "USA"
    },
    sessions: []
  }
];
