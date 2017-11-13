import { AppointmentService } from './../appointment.service';
import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Appointment } from "../appointment";

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppointmentFormComponent implements OnInit {

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.consultar();
  }

  appointment = new Appointment();
  tipos = ['Pessoal', 'Trabalho'];

  edicao: boolean = false;
  hasErro: boolean = false;
  isSucesso: boolean = false;
  mensagem: string;

  appointments = [];

  isPersonal(appointment: Appointment): boolean {
    return appointment.tipo == 'Pessoal';
  }

  consultar() {
    this.appointmentService.consultar()
      .then(appointments => {
        this.appointments = appointments;
      })
      .catch(erro => {
        //this.hasErro = true;
        //this.mensagem = erro;
      });
  }

  salvar(form: NgForm) {

    this.appointment.titulo = form.value.titulo;
    this.appointment.descricao = form.value.descricao;
    this.appointment.tipo = form.value.tipo;
    this.appointment.data = form.value.data;

    if (this.edicao) {
      this.atualizar();
    } else {
      this.adicionar();
    }
    this.appointment = new Appointment();

    form.reset();
  }

  adicionar() {
    this.appointmentService.adicionar(this.appointment)
      .then(appointment => {
        this.mensagem = `Compromisso ${appointment.titulo} adicionado com sucesso!`;
        this.isSucesso = true;
        this.consultar();
      })
      .catch(erro => {
        this.hasErro = true;
        this.mensagem = erro;
      });

  }

  atualizar() {
    this.appointmentService.atualizar(this.appointment)
      .then(appointment => {
        this.mensagem = `Compromisso ${appointment.titulo} atualizado com sucesso!`;
        this.isSucesso = true;
        this.consultar();
      })
      .catch(erro => {
        this.hasErro = true;
        this.mensagem = erro;
      });
    this.edicao = false;
  }

  aoExcluir(appointment) {
    console.log(appointment);
    this.appointmentService.excluir(appointment.id)
      .then(() => {
        this.mensagem = 'Compromisso exluído com sucesso!';
        this.isSucesso = true;
        this.consultar();
      })
      .catch(erro => {
        this.hasErro = true;
        this.mensagem = erro;
      });
  }

  aoEditar(appointment) {
    this.appointment = appointment;
    this.edicao = true;
  }

  limparMensagens(){
    this.hasErro = false;
    this.isSucesso = false;
    this.mensagem = '';
  }
}
