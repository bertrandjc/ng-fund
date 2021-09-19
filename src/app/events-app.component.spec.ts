import { TestBed } from '@angular/core/testing';
import { EventsAppComponent } from './events-app.component';

describe('EventsAppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EventsAppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EventsAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-fund'`, () => {
    const fixture = TestBed.createComponent(EventsAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ng-fund');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EventsAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ng-fund app is running!');
  });
});
