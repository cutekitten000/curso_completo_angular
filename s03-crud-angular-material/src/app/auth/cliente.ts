import { Injectable } from '@angular/core';
import { Cliente } from '../cadastro/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  salvar(cliente: Cliente) {
    console.log(cliente);
  }
}
