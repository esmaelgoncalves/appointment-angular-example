import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){}

  appointments = [
    {
      id: 1,
      titulo: 'Consulta Médica',
      descricao: 'Consulta de cardiologista',
      tipo: 'Pessoal',
      data: new Date()
    },
    {
      id: 2,
      titulo: 'Reunião com fornecedores',
      descricao: 'Reunião de alinhamento com fornecedores e clientes.',
      tipo: 'Trabalho',
      data: new Date()
    }
  ];

  

  aoAdicionar(appointment: any) {
    this.appointments.push(appointment);
  }
}
