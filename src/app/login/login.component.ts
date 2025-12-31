import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email : string=""
  password : string=""
  //injection de dependances
  constructor(private AS: AuthService, private router: Router) { }
  login(){
  this.AS.signInWithEmailAndPassword(this.email, this.password).then(()=>{ //promise, 3ibara try le then : recuperer le retour avec succes
    this.router.navigate(['/member']);
  });
  }
}
