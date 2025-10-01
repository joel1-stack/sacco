import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDocuments } from './member-documents';

describe('MemberDocuments', () => {
  let component: MemberDocuments;
  let fixture: ComponentFixture<MemberDocuments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberDocuments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberDocuments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
