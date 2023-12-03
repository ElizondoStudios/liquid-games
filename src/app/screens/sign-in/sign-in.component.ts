import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from 'src/app/components/error/error.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  hoy = new Date();
  Signform: FormGroup;

  constructor( private formBuilder: FormBuilder, private user: UserService,
    private api: ApiService, private router: Router, private dialog: MatDialog) {
   this.Signform= this.createSignForm();
  }

  createSignForm(): FormGroup{
    return this.formBuilder.group({
      usuario: ['', Validators.required],
      contrasenia: ['', [Validators.required, Validators.minLength(8)]],
      correo: ['', [Validators.required, Validators.email]],
      fechaNacimiento: ['', Validators.required]
    });
  }

  SignIn(){
    if(this.Signform.valid){
      this.api.postUsuario(this.Signform?.value).subscribe(
        res => {
          this.user.SetUsuarioID(res.id);
          this.router.navigateByUrl('inicio');
        },
        err => {
          console.log(err)
          this.dialog.open(ErrorComponent);
        }
      );
    }
  }
}
