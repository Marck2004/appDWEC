import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  listaMensajes: string[] = [];

  add(nuevoMensaje: string) {
    this.listaMensajes.push(nuevoMensaje);
  }

  clear() {
    this.listaMensajes = [];
  }
}
