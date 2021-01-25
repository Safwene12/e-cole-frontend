import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminAddGroupeComponent } from '../admin-add-groupe/admin-add-groupe.component';
import { AdminAddSectionComponent } from '../admin-add-section/admin-add-section.component';
import { AdminAddSpecialityComponent } from '../admin-add-speciality/admin-add-speciality.component';
import { AdminAddSubjectComponent } from '../admin-add-subject/admin-add-subject.component';


@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  
  public isCollapsedAddP = true;
  constructor(private dialog: MatDialog) { }
  openDialogSpecialite() {
    const dialogRef = this.dialog.open(AdminAddSpecialityComponent,{
      height: '550px',
      width: '600px',
    });
  }
  openDialogSubject() {
    const dialogRef = this.dialog.open(AdminAddSubjectComponent,{
      height: '550px',
      width: '600px',
    });
  }

  openDialogGroupe() {
    const dialogRef = this.dialog.open(AdminAddGroupeComponent,{
      height: '550px',
      width: '600px',
    });
  }
  openDialogSection() {
    const dialogRef = this.dialog.open(AdminAddSectionComponent,{
      height: '550px',
      width: '600px',
    });
  }
 
  ngOnInit(): void {
 
  }
}
