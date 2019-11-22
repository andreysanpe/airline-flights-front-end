import { Component, OnInit } from '@angular/core';
import { FlightService } from '../servicio/flight.service';
import { ModalService } from '../servicio/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  id = '';
  constructor(private flightService: FlightService, private modalService: ModalService) { }

  ngOnInit() {
  }

  obtainAllFlights(event) {
    event.preventDefault();
    this.flightService.obtainFlights().subscribe(resultado => {
      this.flightService.setFlights(resultado);
    },
      err => {
        alert(err.error.message);
      });
  }
  obtainAllFlightsByClient(event) {
    event.preventDefault();
    this.flightService.obtainFlightsByClient(this.id).subscribe(resultado => {
      this.flightService.setFlights(resultado);
    },
      err => {
       // alert(err.error.message);
       this.modalService.openModalError();
      }
    );
  }
}
