import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  @Input() errorMsg: string;
  @Input() info:string;
  
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
