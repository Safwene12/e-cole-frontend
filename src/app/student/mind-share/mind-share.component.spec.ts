import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindShareComponent } from './mind-share.component';

describe('MindShareComponent', () => {
  let component: MindShareComponent;
  let fixture: ComponentFixture<MindShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MindShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MindShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
