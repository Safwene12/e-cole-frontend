
import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { TeacherComponent } from './teacher/teacher.component';
import { LoginComponent } from './login/login.component';
import { baseURL } from './shared/baseURL';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { ErrorInterceptor } from './auth/error.interceptor';
import { EtudiantService } from './services/etudiant.service';
import { EnseignatService } from './services/enseignat.service';
import {MatInputModule} from '@angular/material/input';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminAddGroupeComponent } from './admin/admin-add-groupe/admin-add-groupe.component';
import { AdminAddSectionComponent } from './admin/admin-add-section/admin-add-section.component';
import { AdminAddSpecialityComponent } from './admin/admin-add-speciality/admin-add-speciality.component';
import { AdminAddStudentComponent } from './admin/admin-add-student/admin-add-student.component';
import { AdminAddSubjectComponent } from './admin/admin-add-subject/admin-add-subject.component';
import { AdminAddTeacherComponent } from './admin/admin-add-teacher/admin-add-teacher.component';
import { StudentSidebarComponent } from './student/student-sidebar/student-sidebar.component';
import { StudentHeaderComponent } from './student/student-header/student-header.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { StudentFooterComponent } from './student/student-footer/student-footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { EditProfilComponent } from './student/edit-profil/edit-profil.component';
import { StudentMessagerieComponent } from './student/student-messagerie/student-messagerie.component';
import { StudentInboxComponent } from './student/student-inbox/student-inbox.component';
import { StudentSentMessagesComponent } from './student/student-sent-messages/student-sent-messages.component';
import { AuthGuard } from './auth/auth.guard';
import { StudentNewEmailComponent } from './student/student-new-email/student-new-email.component';
import { ReadEmailComponent } from './student/read-email/read-email.component';
import { ListEnseignantsComponent } from './student/list-enseignants/list-enseignants.component';
import { ListCollegueComponent } from './student/list-collegue/list-collegue.component';
import { ContactComponent } from './student/contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AdminComponent,
    TeacherComponent,
    LoginComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    AdminHomeComponent,
    AdminFooterComponent,
    AdminAddGroupeComponent,
    AdminAddSectionComponent,
    AdminAddSpecialityComponent,
    AdminAddStudentComponent,
    AdminAddSubjectComponent,
    AdminAddTeacherComponent,
    StudentSidebarComponent,
    StudentHeaderComponent,
    StudentHomeComponent,
    StudentFooterComponent,
    EditProfilComponent,
    StudentMessagerieComponent,
    StudentInboxComponent,
    StudentSentMessagesComponent,
    StudentNewEmailComponent,
    ReadEmailComponent,
    ListEnseignantsComponent,
    ListCollegueComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [{provide: 'BaseURL', useValue: baseURL}, EtudiantService, EnseignatService,
             { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
             { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
             
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
