import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivo',
  standalone: false,
  templateUrl: './diretivo.html',
  styleUrl: './diretivo.css'
})
export class Diretivo {

  mostraMensagem = true;

  toggleMensagem() {
    this.mostraMensagem = !this.mostraMensagem;
  }
}
