import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddSpecialityComponent } from './admin-add-speciality.component';

describe('AdminAddSpecialityComponent', () => {
  let component: AdminAddSpecialityComponent;
  let fixture: ComponentFixture<AdminAddSpecialityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddSpecialityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddSpecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
