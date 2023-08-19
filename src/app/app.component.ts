import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-mouse-animation></app-mouse-animation>
    <app-header></app-header>
    <div style="height: 95vh; width: 100%; display: flex; justify-content: center; align-items: center;">
      <h1 style="color: white; font-size: 60px;">coming soon</h1>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bentodev';
}