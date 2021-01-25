import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMessagerieComponent } from './student-messagerie.component';

describe('StudentMessagerieComponent', () => {
  let component: StudentMessagerieComponent;
  let fixture: ComponentFixture<StudentMessagerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMessagerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMessagerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
