import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <test></test>
    <h1>Hello {{name}}</h1>
  `,
})
export class AppComponent  { name = 'Angular'; }
