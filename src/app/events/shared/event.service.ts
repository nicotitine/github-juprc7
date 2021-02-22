import { Injectable } from "@angular/core";

@Injectable()
export class EventService {
  getEvents() {
    return EVENTS;
  }

  getEvent(id: number) {
    console.log(id);
    return EVENTS.find(event => event.id === id);
  }
}

const EVENTS = [
  {
    id: 1,
    name: "Angular Connect",
    date: "9/26/2036",
    time: "10.00 am",
    price: 599.99,
    imageUrl: "/assets/images/angularconnect-shield.png",
    location: {
      address: "1057 DT",
      city: "London",
      country: "UK"
    }
  },
  {
    id: 2,
    name: "Angular Test",
    date: "9/26/2032",
    time: "9.00 am",
    price: 499.99,
    imageUrl: "/assets/images/angularconnect-shield.png",
    location: {
      address: "1057 DT",
      city: "London",
      country: "UK"
    }
  }
];
