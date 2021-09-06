import { Component, Input } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [ `
                .pad-left { margin-left:8px; }
                .well div { color: #bbb; }
            `]
})

export class EventThumbnailComponent{
    @Input() event:any;

    someProperty: any = "some valie";

    logFoo(){
        console.log('foo');
    }


    /* Output() eventClick = new EventEmitter(); 

        handleClickMe(){
        this.eventClick.emit(this.event.name);
    } */

}