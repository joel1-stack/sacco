import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsAccount } from './savings-account';

describe('SavingsAccount', () => {
  let component: SavingsAccount;
  let fixture: ComponentFixture<SavingsAccount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingsAccount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingsAccount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
