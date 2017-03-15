import { Component } from '@angular/core';

@Component({
  selector: 'test',
  template: `
    <h1>This is from {{ testVar }}</h1>
  `
})

export class TestComponent {
  testVar = 'Test page';
}
