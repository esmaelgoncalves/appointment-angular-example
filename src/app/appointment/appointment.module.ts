import { AppointmentGridComponent } from './appointment-grid/appointment-grid.component';
import { AppointmentService } from './appointment.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppointmentFormComponent } from './appointment-form/appointment-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [AppointmentFormComponent, AppointmentGridComponent],
  exports: [AppointmentFormComponent],
  providers: [AppointmentService]
})
export class AppointmentModule { }
