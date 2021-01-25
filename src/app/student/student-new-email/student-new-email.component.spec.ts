import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNewEmailComponent } from './student-new-email.component';

describe('StudentNewEmailComponent', () => {
  let component: StudentNewEmailComponent;
  let fixture: ComponentFixture<StudentNewEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentNewEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentNewEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
