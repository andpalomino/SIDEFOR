import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { promise } from 'protractor';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth, private router: Router) { }

  login(correo:string, clave:string){
    return new Promise((resolve, rejected) => (
      this.AFauth.signInWithEmailAndPassword(correo, clave).then(user=>{
        resolve(user)
      }).catch(err=> rejected(err))
    ));
    
  }

  salida(){
    this.AFauth.signOut().then(() => {
      this.router.navigate(['/home']);
    });
  }
}
