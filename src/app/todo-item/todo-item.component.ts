import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItem } from './todo-item';

@Component({
  selector: 'todo-todo-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="todo-item">
      <!-- on met ? a item pour lui dire que word peut être nul -->
      <input type="checkbox"
        class="todo-checkbox"
        (click)="completeItem()"
        [checked]="item?.completed"/>
        <span class = "todo-title" [ngClass]="{'todo-complete': item?.completed}"> 
        {{item?.title}}
        </span>
      <button class="btn btn-red" (click)="removeItem()">
      Remove
      </button>
    </div>
  `,
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input() item?: TodoItem 
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  removeItem(): void {
    this.remove.emit(this.item);
  }
  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: { completed : !this.item?.completed }
    });
  }

  // = new todoItem();
}
