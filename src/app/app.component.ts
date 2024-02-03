import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  // [RouterOutlet]
  [InputButtonUnitComponent]
  ,
  template: `
    <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <todo-input-button-unit></todo-input-button-unit>
    </section>
  </main> 
  `,  
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-list';
  pass = 'Elodie';
}
