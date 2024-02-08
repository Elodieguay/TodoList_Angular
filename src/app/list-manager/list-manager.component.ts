import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { InputButtonUnitComponent } from '../input-button-unit/input-button-unit.component';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoItem } from '../todo-item/todo-item';
import { TodoListService } from '../services/todo-list.service';

  @Component({
  selector: 'todo-list-manager',
  standalone: true,
  imports:
  [InputButtonUnitComponent, CommonModule, TodoItemComponent ],
  template:`
      <div class="todo-app">
        <todo-input-button-unit (submit)="addItem($event)"> </todo-input-button-unit>
        <ul>
          <li *ngFor="let todoItem of todoList">
            <todo-todo-item 
            [item]="todoItem" 
            (remove)="removeItem($event)"
            (update)="updateItem($event.item, $event.changes)"
            ></todo-todo-item>        
          </li>
        </ul>
      </div>
    
    `,   
  styleUrl: './list-manager.component.scss'
})


export class ListManagerComponent {
  todoList: TodoItem[];

  // title = 'todo-list';

  // todoList:todoItem[] = [
  //   {title: 'install NodeJS'},
  //   {title: 'install Angular CLI'},
  //   {title: 'create new app'},
  //   {title: 'serve app'},
  //   {title: 'develop app'},
  //   {title: 'deploy app'},
  // ];

  // addItem(title: string) {
  //   console.log("avant additem");
        
  //   this.todoList.push({ title: title });
  //   console.log(this.todoList);
    
  // }

  constructor(private todoListService: TodoListService) {
    this.todoList = this.todoListService.getTodoList();
  }
 
  addItem(title: string): void {
    this.todoListService.addItem({ title });
  }
  
  removeItem(item: TodoItem): void {
    this.todoListService.deleteItem(item);
  }

  updateItem(item: TodoItem, changes: any): void {
    this.todoListService.updateItem(item, changes);
  }

}
