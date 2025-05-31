import { Component } from '@angular/core';
import { HelloWorld } from './helloworld/helloworld';
import { Minhapagina } from './minhapagina/minhapagina';

@Component({
  selector: 'app-root',
  imports: [HelloWorld, Minhapagina],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 's02-conceitos-basicos';
}
