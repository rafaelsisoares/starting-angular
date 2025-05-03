import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-start',
  imports: [RouterOutlet, HomeComponent],
  // templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <h1>My First Angular App</h1>
    <app-home></app-home>
    <router-outlet />`
})
export class AppComponent {
  title = 'starting-angular';
}
