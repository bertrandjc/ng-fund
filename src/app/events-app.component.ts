import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
            <!-- <h2>My Hello world! <img src="/assets/images/basic-shield.png" style="width:40px;"></h2> -->
            <nav-bar></nav-bar>
            <router-outlet></router-outlet>
          `
})
export class EventAppComponent {
  title = 'ng-fund';
}
