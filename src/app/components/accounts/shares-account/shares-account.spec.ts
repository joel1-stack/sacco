import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesAccount } from './shares-account';

describe('SharesAccount', () => {
  let component: SharesAccount;
  let fixture: ComponentFixture<SharesAccount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharesAccount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharesAccount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
