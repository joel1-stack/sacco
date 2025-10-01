import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuarantorDashboard } from './guarantor-dashboard';

describe('GuarantorDashboard', () => {
  let component: GuarantorDashboard;
  let fixture: ComponentFixture<GuarantorDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuarantorDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuarantorDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
