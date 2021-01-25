import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
  constructor(   private formBuilder: FormBuilder,
   // private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthentificationService) {
      if (this.authenticationService.currentUserValue) { 
        //this.router.navigate(['/admin/home']);
        location.reload();
      }
     }

  ngOnInit(): void {
    
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  // get return url from route parameters or default to '/'
 // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin/home';
  }
  get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.loading=true;
                   // this.router.navigate([this.returnUrl]);
                   if(this.authenticationService.currentUserValue.authorities[0]=='ROLE_ADMIN')
                   {
                     this.router.navigateByUrl('/admin');
                     console.log(this.authenticationService.currentUserValue.authorities[0]);
                     
                  
                   }
                   if(this.authenticationService.currentUserValue.authorities[0]=='ROLE_ETUDIANT')
                   {
                     this.router.navigateByUrl('/student');
                    
                     
                   }
                },
                error => {
                    this.error = 'Username or Password incorrect';
                    this.loading = false;
                });
               
    }
    
  

}
