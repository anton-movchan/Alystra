import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerContactDetailsComponent } from './customer-contact-details.component';

describe('CustomerContactDetailsComponent', () => {
  let component: CustomerContactDetailsComponent;
  let fixture: ComponentFixture<CustomerContactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerContactDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
