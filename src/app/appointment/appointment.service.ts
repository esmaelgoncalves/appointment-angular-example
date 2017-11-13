import { Appointment } from './appointment';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppointmentService {

  constructor(private http: Http) { }

  consultar(): Promise<any> {
    return this.http.get('http://localhost:3000/appointments')
      .toPromise()
      .then(response => response.json())
      .catch(erro => {
        return Promise.reject('Erro ao consultar appointments');
      });
  }

  adicionar(appointment: Appointment): Promise<any> {
    return this.http.post('http://localhost:3000/appointments', appointment)
      .toPromise()
      .then(response => response.json())
      .catch(erro => {
        return Promise.reject(`Erro ao adicionar livro: ${appointment.titulo}`);
      });
  }

  atualizar(livro: any): Promise<any> {
    return this.http.put(`http://localhost:3000/appointments/${livro.id}`, livro)
      .toPromise()
      .then(response => response.json())
      .catch(erro => {
        return Promise.reject(`Erro ao alterar appointments ${livro.id}`);
      });
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`http://localhost:3000/appointments/${codigo}`)
      .toPromise()
      .then(() => null)
      .catch(erro => {
        return Promise.reject(`Erro ao excluir appointments ${codigo}`);
      });
  }

}
