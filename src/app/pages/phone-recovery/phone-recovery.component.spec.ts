import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneRecoveryComponent } from './phone-recovery.component';

describe('PhoneRecoveryComponent', () => {
  let component: PhoneRecoveryComponent;
  let fixture: ComponentFixture<PhoneRecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneRecoveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
