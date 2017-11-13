import { Appointment } from './../appointment';
import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { AppointmentService } from "../appointment.service";


@Component({
  selector: 'app-appointment-grid',
  templateUrl: './appointment-grid.component.html',
  styleUrls: ['./appointment-grid.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppointmentGridComponent implements OnInit {

  @Input() appointments = [];

  @Output('excluir') appointmentExcluido = new EventEmitter();
  @Output('editar') appointmentAlterado = new EventEmitter();


  constructor() { }

  ngOnInit() {
    
  }

  isPersonal(appointment: Appointment): boolean {
    return appointment.tipo == 'Pessoal';
  }

  excluir(appointment: Appointment){
    this.appointmentExcluido.emit(appointment);
  }

  atualizar(appointment: Appointment){
    this.appointmentAlterado.emit(appointment);
  }

}
