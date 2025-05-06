import { Component } from '@angular/core';
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
};
