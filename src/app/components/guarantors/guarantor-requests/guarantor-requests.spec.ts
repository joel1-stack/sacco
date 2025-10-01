import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuarantorRequests } from './guarantor-requests';

describe('GuarantorRequests', () => {
  let component: GuarantorRequests;
  let fixture: ComponentFixture<GuarantorRequests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuarantorRequests]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuarantorRequests);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
