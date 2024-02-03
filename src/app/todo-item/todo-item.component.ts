import { Component, Input } from '@angular/core';
import { todoItem } from './todo-item';

@Component({
  selector: 'todo-todo-item',
  standalone: true,
  imports: [],
  template: `
    <p>
      <!-- on met ? a word pour lui dire que word peut être nul -->
      {{word?.title}}
    </p>
  `,
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input() word?: todoItem 
  // = new todoItem();
}
