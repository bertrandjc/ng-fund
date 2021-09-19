import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./shared/event.model";


@Component({
    //selector: 'events-list',
    template: `<div>
                   <h1>Upcoming Angular Events</h1>
                   <hr />
                  <div class="row">
                  <div *ngFor="let eventVar of events" class="col-md-5">
                    <event-thumbnail [event]="eventVar"></event-thumbnail>
                  </div>
                   <!-- (eventClick)="handleEventClicked($event)" --> 
                   
                   <!-- <event-thumbnail #thumbnail [event]="event1"></event-thumbnail> -->

                   <!--  <h3>{{thumbnail.someProperty}}</h3>
                   <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me foo</button> -->
               </div>
            `
})

export class EventsListComponent implements OnInit{
  events: IEvent[] = [];

  constructor(private eventService: EventService, 
              private route:ActivatedRoute){
  }
  
  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }
 
}