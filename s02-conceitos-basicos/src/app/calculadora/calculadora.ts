import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  imports: [],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.scss'
})
export class Calculadora {
  numero1: number = 0;
  number2: number = 0;
  resultado: number = 0;

  calcularResultado() {
    this.resultado = this.numero1 + this.number2;
  }
}