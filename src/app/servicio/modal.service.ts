import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorComponent } from '../shared/error/error.component';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalRef;
  constructor( private modalService: NgbModal) { }

  openModalError(errorMenssage,info) {
    this.modalRef = this.modalService.open(ErrorComponent);
    this.modalRef.componentInstance.errorMsg = errorMenssage;
    this.modalRef.componentInstance.info = info;
  }

  openReserveForm(data) {
    this.modalRef = this.modalService.open(ReservationFormComponent);
    this.modalRef.componentInstance.data = data;
    return this.modalRef.result;
  }
}
