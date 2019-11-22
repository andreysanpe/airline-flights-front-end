import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  @Input() data;

  document = '';
  age=18;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  bookFlight() {
    this.activeModal.close({
      ...this.data,
      idClient: this.document,
      age: this.age
    });
  }
  cancelFlight() {
    this.activeModal.close(false);
  }

  get showAgeError(){
    return this.age<18;
  }
}
