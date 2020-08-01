import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsModal } from './details-modal.component';

describe('DetailsModal', () => {
  let component: DetailsModal;
  let fixture: ComponentFixture<DetailsModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsModal ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
