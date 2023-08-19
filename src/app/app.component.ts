import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-mouse-animation></app-mouse-animation>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bentodev';
}