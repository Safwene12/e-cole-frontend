import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddGroupeComponent } from './admin-add-groupe.component';

describe('AdminAddGroupeComponent', () => {
  let component: AdminAddGroupeComponent;
  let fixture: ComponentFixture<AdminAddGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddGroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
