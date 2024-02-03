import { Component, OnInit, ViewChild } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { todoItem } from './todo-item/todo-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  // [RouterOutlet]
  [InputButtonUnitComponent, CommonModule, TodoItemComponent]
  ,
  template: `
    <main>
    <header class="brand-name">
      <img class="brand-logo" src="" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <h1>
        Welcome to {{ title }}!
      </h1>
      <todo-input-button-unit (submit)="addItem($event)"> </todo-input-button-unit>
      <ul>
        <li *ngFor="let todoItem of todoList">
          <todo-todo-item [word]="todoItem"></todo-todo-item>        
        </li>
      </ul>
    </section>
  </main> 
  `,  
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-list';

  todoList:todoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  addItem(title: string) {
    console.log("avant additem");
        
    this.todoList.push({ title: title });
    console.log(this.todoList);
    
  }
}
