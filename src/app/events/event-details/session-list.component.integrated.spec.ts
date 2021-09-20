import { Component, DebugElement, Input, NO_ERRORS_SCHEMA } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { AuthService } from "src/app/user/auth.service"
import { VoterService } from "./voter.service"
import { DurationPipe } from "../shared/duration.pipe"
import { SessionListComponent } from "./session-list.component"
import { By } from "@angular/platform-browser"
//import { CollapsibleWellComponent } from "src/app/common"
//import { UpvoteComponent } from "."

//OPtion 1 (Shallow integration test -- but option 2: Schema is easier!)
// @Component({
//     selector: 'upvote'
// })
// class MockUpvoteComponent{
//     @Input()
//     @Input()
// }


describe('SessionListComponent', ()=> {
    
    let mockAuthService,
        mockVoterService,
        fixture: ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        element: HTMLElement,
        debugEl: DebugElement

    beforeEach(()=>{
        mockAuthService = { isAuthenticated: ()=> true, currentUser: { userName:'Joe'} }
        mockVoterService = { userHasVoted: () => true }

        TestBed.configureTestingModule({
            declarations: [
                SessionListComponent,
                DurationPipe,
                //CollapsibleWellComponent, (sorry :  shallow testing!)
                //UpvoteComponent (sorry :  shallow testing!)
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService},
                { provide: VoterService, useValue: mockVoterService}
            ],
            schemas: [
                NO_ERRORS_SCHEMA 
            ]
        });

        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    })

    describe('initial display', ()=> {
        
        it('should have the correct title', ()=> {
            component.sessions = [
                { name: 'Session 1', id: 3, presenter: 'Joe', duration: 1, level: 'beginner', abstract: 'abstract',
                  voters : ['Joe', 'John'] }
            ];

            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 3;
            component.ngOnChanges();
            
            fixture.detectChanges();
            
            //expect(element.querySelector('[well-title]').textContent).toContain('Session 1'); same bellow
            expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
        })

    })

})