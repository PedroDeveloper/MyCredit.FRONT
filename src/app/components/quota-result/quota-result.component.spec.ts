import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotaResultComponent } from './quota-result.component';

describe('QuotaResultComponent', () => {
  let component: QuotaResultComponent;
  let fixture: ComponentFixture<QuotaResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotaResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotaResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
