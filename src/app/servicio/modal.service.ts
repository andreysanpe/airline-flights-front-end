import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorComponent } from '../shared/error/error.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalRef;
  constructor( private modalService: NgbModal) { }

  openModalError() {
    this.modalRef = this.modalService.open(ErrorComponent);
    
  }
}
