import { Component, signal } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { ReportsService } from '../../services/reports.service';
import { IResponse } from '../../interfaces/iresponse';

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
  counter = signal(0); // Signal para contagem
  password = signal("");
  breadIngredients = ["Farinha", "Água", "Sal", "Fermento", "Açúcar", "Óleo"];
  reports: IResponse[] = [];

  constructor(private service: ReportsService) {
    // Requisição HTTP
    this.service.getReports().subscribe({
      next: (data) => {
        this.reports = data.map((report: IResponse) => report);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log("Consulta finalizada");
      }
    });
  }


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

  handlePassword(event: Event) {
    const input = event.target as HTMLInputElement;
    this.password.set(input.value);
  }
};
