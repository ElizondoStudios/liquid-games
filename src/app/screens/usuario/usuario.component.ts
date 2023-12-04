import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from 'src/app/components/error/error.component';
import usuario from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{
  UsuarioForm: FormGroup;
  Usuario: usuario | undefined;
  hoy= new Date();

  constructor( private formBuilder: FormBuilder, private user: UserService,
    private api: ApiService, private dialog: MatDialog) {
    this.UsuarioForm= this.CreateUsuarioForm();
  }

  ngOnInit(): void {
    this.GetUsuario();
  }

  CreateUsuarioForm(): FormGroup{
    return this.formBuilder.group({
      usuario: ['', Validators.required],
      contrasenia: ['', [Validators.required, Validators.minLength(8)]],
      correo: ['', [Validators.required, Validators.email]],
      fechaNacimiento: ['', Validators.required]
    });
  }

  GetUsuario(){
    // this.UsuarioForm.controls['usuario'].setValue("usuario");
    // this.UsuarioForm.controls['contrasenia'].setValue("contraseña");
    // this.UsuarioForm.controls['correo'].setValue("a@a.com");
    // this.UsuarioForm.controls['fechaNacimiento'].setValue("25/10/2003");
    this.api.getUsuarioEspecifico({id: (this.user.GetUsuarioID() as number)}).subscribe(
      res => {
        this.Usuario= res;
        this.UsuarioForm.controls['usuario'].setValue(this.Usuario?.usuario);
        this.UsuarioForm.controls['contrasenia'].setValue(this.Usuario?.contrasenia);
        this.UsuarioForm.controls['correo'].setValue(this.Usuario?.correo);
        this.UsuarioForm.controls['fechaNacimiento'].setValue(this.Usuario?.fechaNacimiento);
      },
      err => {
        console.log(err)
        this.dialog.open(ErrorComponent);
      }
    );
  }

  PutUsuario(){
    this.api.putUsuario({id: (this.user.GetUsuarioID() as number), usuario: this.UsuarioForm.controls['usuario'].value,
    contrasenia: this.UsuarioForm.controls['contrasenia'].value, correo: this.UsuarioForm.controls['correo'].value,
    fechaNacimiento: this.UsuarioForm.controls['fechaNacimiento'].value}).subscribe(
      res => {
        console.log(res);
        // this.dialog.open(ErrorComponent);
      },
      err => {
        console.log(err);
        this.dialog.open(ErrorComponent);
      }
    );
  }
}
