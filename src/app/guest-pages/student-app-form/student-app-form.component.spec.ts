import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAppFormComponent } from './student-app-form.component';

describe('StudentAppFormComponent', () => {
  let component: StudentAppFormComponent;
  let fixture: ComponentFixture<StudentAppFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAppFormComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAppFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
