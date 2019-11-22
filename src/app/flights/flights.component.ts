import { ModalService } from './../servicio/modal.service';
import { Component, OnInit } from '@angular/core';
import {FlightService} from '../servicio/flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  constructor(private flightService:FlightService, private modalService: ModalService) {

   }
  flights;
  headElements = ['','Cod Vuelo', 'Fecha','Hora', 'Origen', 'Destino','Precio'];
  headElementsClients = ['Cod Vuelo', 'Identificación', 'Fecha','Hora', 'Origen', 'Destino','Precio'];
  ngOnInit() {
    this.obtainFlights();
  }

  obtainFlights() {
    this.flightService.getFlights().subscribe(
      results => this.flights = results
    );
  }
  bookFlight(data) {
    this.modalService.openReserveForm(data).then(result => {
     if(result) {  
       this.flightService.bookFlight(result).subscribe(
         resultado => this.modalService.openModalError(resultado.info,'Reserva exitosa'),
         err =>this.modalService.openModalError(err.error.message,'Error en la reserva')
       );
     }
    });
  }
}