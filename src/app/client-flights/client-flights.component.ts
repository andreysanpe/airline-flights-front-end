import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-flights',
  templateUrl: './client-flights.component.html',
  styleUrls: ['./client-flights.component.css']
})
export class ClientFlightsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  flights: any = [
    {id: 1, identification: '123444121', date: '2019-02-23', hour: '12:20:00', origin: 'España', destiny: 'Japon', price: '300.000'},
    {id: 2, identification: '123444121', date: '2019-02-23', hour: '12:20:00', origin: 'España', destiny: 'Japon', price: '300.000'},
    {id: 3, identification: '123444121', date: '2019-02-23', hour: '12:20:00', origin: 'España', destiny: 'Japon', price: '300.000'},
  ];

  headElements = ['Cod Vuelo','Identificacion', 'Fecha','Hora', 'Origen', 'Destino','Precio'];

}