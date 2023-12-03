import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FailedLoginComponent } from 'src/app/components/failed-login/failed-login.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor( private formBuilder: FormBuilder, private user: UserService,
     private api: ApiService, private router: Router, private dialog: MatDialog) {
    this.LoginForm= this.createLoginForm();
   }

  LoginForm: FormGroup;

  ngOnInit(): void {
  }

  createLoginForm(): FormGroup{
    return this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  Login(){
    if(this.LoginForm.valid){
      console.log("login")
      this.api.postTryLogin(this.LoginForm?.value).subscribe(
        res => {
          this.user.SetUsuarioID(res.id);
          this.router.navigate(['/inicio']);
        },
        err => {
          console.log(err)
          this.dialog.open(FailedLoginComponent);
        }
      );
    }
  }
}
