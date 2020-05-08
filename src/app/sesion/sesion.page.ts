import { Component, OnInit } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage implements OnInit {

  correo: string;
  clave: string;

  constructor(private authservice: AuthService, public router: Router) { }

  ngOnInit() {
  }

  enviarSesion()
  {
    this.authservice.login(this.correo, this.clave).then(res =>{
      this.router.navigate(['/iniciar']);
    }).catch(err => alert('Nombre de usuario o contraseña incorrectos, o no existe el usuario'));

  }

}
