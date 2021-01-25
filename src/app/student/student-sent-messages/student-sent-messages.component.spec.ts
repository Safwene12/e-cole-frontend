import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSentMessagesComponent } from './student-sent-messages.component';

describe('StudentSentMessagesComponent', () => {
  let component: StudentSentMessagesComponent;
  let fixture: ComponentFixture<StudentSentMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSentMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSentMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
