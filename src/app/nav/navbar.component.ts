import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { EventService, IEvent, ISession } from "../events";
import { AuthService } from "../user/auth.service";

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
                .nav.navbar-nav {font-size: 15px;}
                #searchForm {margin-right: 100px;}
                @media (max-width: 1200px) { #searchForm {display:none}}
                li > a.active { color:#F97924; }
            `]
})

export class NavBarComponent implements OnInit{
    searchTerm: string = "";
    foundSessions!: ISession[];
    events: Observable<IEvent[]>

    constructor(public auth: AuthService, private eventService: EventService){
        
    }

    ngOnInit(): void {
        this.events = this.eventService.getEvents();
    }

    searchSessions(searchTerm: string){
        this.eventService.searchSessions(searchTerm).subscribe(sessions =>{
                this.foundSessions = sessions;
                //console.log(this.foundSessions);
            })
    }

}