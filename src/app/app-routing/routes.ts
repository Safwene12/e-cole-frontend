import { Routes } from "@angular/router";
import { AdminAddSectionComponent } from "../admin/admin-add-section/admin-add-section.component";
import { AdminAddStudentComponent } from "../admin/admin-add-student/admin-add-student.component";
import { AdminAddTeacherComponent } from "../admin/admin-add-teacher/admin-add-teacher.component";
import { AdminChartsComponent } from "../admin/admin-charts/admin-charts.component";
import { AdminFooterComponent } from "../admin/admin-footer/admin-footer.component";
import { AdminHeaderComponent } from "../admin/admin-header/admin-header.component";
import { AdminHomeComponent } from "../admin/admin-home/admin-home.component";
import { AdminSidebarComponent } from "../admin/admin-sidebar/admin-sidebar.component";
import { AdminComponent } from "../admin/admin.component";
import { LoginComponent } from "../login/login.component";
import { ContactComponent } from "../student/contact/contact.component";
import { EditProfilComponent } from "../student/edit-profil/edit-profil.component";
import { ListCollegueComponent } from "../student/list-collegue/list-collegue.component";
import { ListEnseignantsComponent } from "../student/list-enseignants/list-enseignants.component";
import { ReadEmailComponent } from "../student/read-email/read-email.component";
import { StudentHomeComponent } from "../student/student-home/student-home.component";
import { StudentInboxComponent } from "../student/student-inbox/student-inbox.component";
import { StudentMessagerieComponent } from "../student/student-messagerie/student-messagerie.component";
import { StudentNewEmailComponent } from "../student/student-new-email/student-new-email.component";
import { StudentProfilsComponent } from "../student/student-profils/student-profils.component";
import { StudentSentMessagesComponent } from "../student/student-sent-messages/student-sent-messages.component";
import { StudentComponent } from "../student/student.component";


export const routes: Routes = [
    {path : 'admin' , component: AdminComponent , children : [
        { path: 'home',  component: AdminHomeComponent },
        { path: 'addStudent',  component: AdminAddStudentComponent },
        { path: 'addTeacher',  component: AdminAddTeacherComponent },
        { path: 'addSection',  component: AdminAddSectionComponent },
        { path: 'charts',  component: AdminChartsComponent },
        { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]},
    {path : 'student' , component: StudentComponent , children : [
        { path: 'home',  component: StudentHomeComponent },
        { path: 'edit-profil',  component: EditProfilComponent },
        { path: 'enseignants',  component: ListEnseignantsComponent },
        { path: 'collegues',  component: ListCollegueComponent },
        { path: 'profil/:id', component: StudentProfilsComponent },
        { path: 'messagerie',  component: StudentMessagerieComponent , children : [
            {path: 'inbox',  component: StudentInboxComponent},
            {path: 'sent',  component: StudentSentMessagesComponent},
            {path: 'newE-mail',  component: StudentNewEmailComponent},
            {path: 'read-mail/:id',  component: ReadEmailComponent},
            {path: 'contact/:id',  component: ContactComponent},
            { path: '', redirectTo: 'inbox', pathMatch: 'full' }
        ]},
        { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]},
    {path : 'login' , component: LoginComponent},
];