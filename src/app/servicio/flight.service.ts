import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class FlightService {
  private flights: Subject<any> = new Subject();
  constructor(private httpClient:HttpClient) { }

  obtainFlights():Observable<any>{
    return this.httpClient.get("http://localhost:8080/v1/airline/flight");
  }
  obtainFlightsByClient(id: string):Observable<any>{
    return this.httpClient.get("http://localhost:8080/v1/airline/client-flights/" + id);
  }

  getFlights(): Observable<any> {
    return this.flights.asObservable();
  }

  setFlights(flights: any) {
    this.flights.next(flights);
  }
}
