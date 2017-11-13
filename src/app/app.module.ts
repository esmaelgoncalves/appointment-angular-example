import { AppointmentModule } from './appointment/appointment.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppointmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
