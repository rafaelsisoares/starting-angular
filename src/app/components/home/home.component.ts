import { Component, signal } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = "Olá Angular";
  text = "Começando uma nova jornada com Angular";
  num = 1;
  condition = this.num >= 5 ? "Verdadeiro" : "Falso";
  image = "https://www.w3schools.com/w3images/lights.jpg";
  counter = signal(0);

  handleClick() {
    this.num = 5;
    console.log("Peguei seu click");
  }

  handleCounterPlus() {
    this.counter.set(this.counter() + 1);
  }

  handleCounterMinus() {
    this.counter.set(this.counter() - 1);
  }

  resetCounter() {
    this.counter.set(0);
  }
};
