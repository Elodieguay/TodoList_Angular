import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListManagerComponent } from './list-manager/list-manager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [ CommonModule, ListManagerComponent]
  ,
  template: `
    <main>
    <header class="brand-name">
      <!-- <img class="brand-logo" src="./assets/flowers.jpg" width="40px" alt="logo" aria-hidden="true"> -->
      {{dateObj | date}}
    </header>
    <section class="content">
      <h1  class="app-title">
        {{ title }}
      </h1>
      <p class="subTitle">
        {{content}}
      <p>
      <todo-list-manager></todo-list-manager>
    </section>
  </main> 
  `,  
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'My tasks for today';
  dateObj: string = Date();
  content: String =  'Try, do your best and you will succeed '
}
