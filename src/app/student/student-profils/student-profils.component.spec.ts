import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfilsComponent } from './student-profils.component';

describe('StudentProfilsComponent', () => {
  let component: StudentProfilsComponent;
  let fixture: ComponentFixture<StudentProfilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentProfilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProfilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
