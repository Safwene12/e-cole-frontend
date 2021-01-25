import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { UserService } from 'src/app/services/user-service.service';
import { Etudiant } from 'src/app/shared/student';
import { User } from 'src/app/shared/user';
import{SharedDataService} from 'src/app/services/shared-data.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  constructor(private authService : AuthentificationService , 
    private userService : UserService ,
    private etudService : EtudiantService,
    private router : Router,
    private data : SharedDataService ) { }
  user : Etudiant = new Etudiant;
  etudiant : Etudiant = new Etudiant;
  idGroupe = 0;
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  fileInfos: Observable<any>;
 
  ngOnInit(): void {
    this.userService.getUserById(this.authService.currentUserValue.id).subscribe(data => this.user=data);
    console.log(this.user.nom)
    
  }
  submit(){
    this.etudService.updateEtud(this.etudiant,this.user.id).subscribe(data=>
      {
        this.router.navigateByUrl('student/home');
        this.data.changeMessage("open alerte");
      })
  }
  onFileChanged(event) {
    this.selectedFiles  = event.target.files
  }
  onUpload() {
    this.progress = 0;
  
    this.currentFile = this.selectedFiles.item(0);
    this.etudService.updateImg(this.currentFile,this.user.id).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          //this.fileInfos = this.uploadService.getFiles();
        }
        location.reload();
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
  
    this.selectedFiles = undefined;
  }
 

}
