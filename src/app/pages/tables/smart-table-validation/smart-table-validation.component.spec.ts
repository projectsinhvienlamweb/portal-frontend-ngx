import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableValidationComponent } from './smart-table-validation.component';

describe('SmartTableValidationComponent', () => {
  let component: SmartTableValidationComponent;
  let fixture: ComponentFixture<SmartTableValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableValidationComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
