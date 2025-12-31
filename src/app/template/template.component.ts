import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
//injection de dependances
  constructor(private AS: AuthService, private router: Router) {
  }

  logout() {
    this.AS.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
