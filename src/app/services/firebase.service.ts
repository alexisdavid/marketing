import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { message } from '../interfaces/mensaje.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  public itemsCollection: AngularFirestoreCollection<message>;

  public mensage: message[] = [];



  constructor(public af: AngularFirestore) { }

  loadMessage() {
    this.itemsCollection = this.af.collection<message>('messages');

    return this.itemsCollection.valueChanges().pipe(
      map((mensaje: message[]) => {
        console.log(mensaje);

      })
    );
  }

  sendMessageFirebase(contact: message) {

    this.itemsCollection.add(contact);

  }

}
