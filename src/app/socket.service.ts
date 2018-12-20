import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(
    private socket: Socket,
    private http: HttpClient
  ) { }

  getData() {
    return this.socket.fromEvent('grafica');
  }
  emmit_obt () {
    this.socket.emit('grafica', (data) => {
      console.log('emit', data);
    });
  }
  geter () {
   return this.http.get('http://localhost:5000/grafica');
  }
}
