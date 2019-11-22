import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFlightsComponent } from './client-flights.component';

describe('ClientFlightsComponent', () => {
  let component: ClientFlightsComponent;
  let fixture: ComponentFixture<ClientFlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientFlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
