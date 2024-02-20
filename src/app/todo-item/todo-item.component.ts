import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItem } from './todo-item';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'todo-todo-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
    class="todo-item"
    [ngStyle]="{'background-color': randomColor}"    >
      <!-- on met ? a item pour lui dire que word peut être nul -->
      <input  type="checkbox"
        class="todo-checkbox"
        (click)="completeItem()"
        [checked]="item?.completed"/>
        <span class = "todo-title" [ngClass]="{'todo-complete': item?.completed}"> 
        {{item?.title}}
        </span>
      <button class="btn btn-red" (click)="removeItem()">
      <span class="material-icons md-48">delete_outline</span>
      </button>
    </div>
  `,
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input() item?: TodoItem 
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  randomColor: string;

  constructor() {
    this.randomColor = this.getRandomPastelColor();
  }

  removeItem(): void {
    this.remove.emit(this.item);
  }

  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: { completed : !this.item?.completed }
    });
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let newColors = '#';
    for (let i = 0; i < 6; i++) {
      newColors += letters[Math.floor(Math.random() * 16)];
    }
    return newColors;
  }
  getRandomPastelColor(): string {
    const min = 150; // Valeur minimale pour chaque composante RVB (pastel)
    const max = 255; // Valeur maximale pour chaque composante RVB (pastel)
    const r = Math.floor(Math.random() * (max - min + 1)) + min;
    const g = Math.floor(Math.random() * (max - min + 1)) + min;
    const b = Math.floor(Math.random() * (max - min + 1)) + min;
    return `rgb(${r}, ${g}, ${b})`;
  }
}
