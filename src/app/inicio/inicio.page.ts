import { Component, OnInit } from '@angular/core';
import { FavoritosService, campos } from '../servicios/favoritos.service';
import { Router } from "@angular/router";


export class arbol{
arbolID:string;

  constructor() {
      this.arbolID = ;
  }

  getMyValue() {
      return this.myValue;
  }

  incrementMyValue(){
      this.myValue++;
 }
} 

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public registros: any=[];

  constructor(public favoritoservice: FavoritosService, public router: Router) { }

  ngOnInit() {
    this.favoritoservice.getFavoritos().subscribe(favoritos => {
      this.registros = favoritos;
      
    })
  }

  openArbol(seleccion:string){
    this.router.navigate(['/descripcion', arbol]);
  }

}
