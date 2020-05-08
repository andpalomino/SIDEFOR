import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(public authservice: AuthService) { }
  
  ngOnInit() {
  }
  
salir(){
    this.authservice.salida();
  }

  
}
