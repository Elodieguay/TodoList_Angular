import { Component, OnInit, ViewChild } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {ListManagerComponent } from './list-manager/list-manager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  // [RouterOutlet]
  [ CommonModule, ListManagerComponent]
  ,
  template: `
    <main>
    <header class="brand-name">
      <img class="brand-logo" src="" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <h1  class="app-title">
        Welcome to {{ title }}!
      </h1>
      <todo-list-manager></todo-list-manager>
    </section>
  </main> 
  `,  
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'My todo-list';
}
