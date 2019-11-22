import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FlightsComponent } from './flights/flights.component';
import {FlightService} from './servicio/flight.service';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ErrorComponent } from './shared/error/error.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlightsComponent,
    ErrorComponent,
    ReservationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent, ReservationFormComponent]
})
export class AppModule { }
