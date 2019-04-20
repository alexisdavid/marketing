import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { message } from '../../interfaces/mensaje.interface';
import { FirebaseService } from "../../services/firebase.service";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  mensaje: message = {
    name: "",
    email: "",
    telephone: '',
    message: "",
  }

  enviado: boolean = false;

  constructor(public afs: FirebaseService) { }

  ngOnInit() {
  }
  sendMessage() {
    this.enviado = true
    this.afs.sendMessageFirebase(this.mensaje);
    this.mensaje = {
      name: "",
      email: "",
      telephone: '',
      message: "",
    }
    setTimeout(() => {
      this.enviado = false;
    }, 3000);




  }
}
