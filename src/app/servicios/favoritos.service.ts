import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";

export interface campos{
  id: string
  arbolId:string
  userId:string
}

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  constructor(private db: AngularFirestore) { }

  getFavoritos(){
    return this.db.collection('Favoritos').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a =>{
        const data = a.payload.doc.data() as campos; 
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

}
