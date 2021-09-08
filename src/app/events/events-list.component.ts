import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService } from "../common/toastr.service";
import { ActivatedRoute } from "@angular/router";


@Component({
    //selector: 'events-list',
    template: `<div>
                   <h1>Upcoming Angular Events</h1>
                   <hr />
                  <div class="row">
                  <div *ngFor="let eventVar of events" class="col-md-5">
                    <event-thumbnail [event]="eventVar" (click)="handleThumbnail(eventVar.name)"></event-thumbnail>
                  </div>
                   <!-- (eventClick)="handleEventClicked($event)" --> 
                   
                   <!-- <event-thumbnail #thumbnail [event]="event1"></event-thumbnail> -->

                   <!--  <h3>{{thumbnail.someProperty}}</h3>
                   <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me foo</button> -->
               </div>
            `
})

export class EventsListComponent implements OnInit{
  /*  handleEventClicked(data: any){
      console.log('received:', data);
  } */
  events: any[] = [];

  constructor(private eventService: EventService, 
              private toastr: ToastrService, 
              private route:ActivatedRoute){
  }
  
  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnail(eventName: string){
    this.toastr.success(eventName);
  }
 
}