import { Component } from '@angular/core';

@Component({
  selector: 'todo-input-button-unit',
  standalone: true,
  imports: [],
  template: `
    <p>
      input-button-unit {{works}}!
    </p>
  `,
  styleUrl: './input-button-unit.component.scss'
})
export class InputButtonUnitComponent {
  works = ' fonctionne'
}
