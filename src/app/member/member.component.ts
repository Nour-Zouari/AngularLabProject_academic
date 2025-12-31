import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MemberService} from "../../services/member.service";
import {Router} from "@angular/router";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  title="Projet Lab"
  //injection de dependances :creer un einstance de service dans le component
  //creer linstance au niveau de constructeur
  constructor(private MS: MemberService,private dialog:MatDialog) {
  }
  dataSource:any[]=[]
  //injecter le service MemberService
  //appeler le service member (methode Getallmembers)
  //a la reception de resultat=>remplir le tableau Datasource
  //dataSource
  ngOnInit() {//fonction qui se lance automatiquement quand on charge le component
    this.MS.GetAllMembers().subscribe((x)=>{this.dataSource=x})
  }

  displayedColumns:string[]=['id','cin','name','type','cv','date','actions'];


  delete(id: string) {
    //1.lancer la boite
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '270px',
      width: '450px',
    });

    //2.attendre le resultat de user
    dialogRef.afterClosed().subscribe(result => {
      //3.si click=confirm
      if(result){
        this.MS.DeleteMember(id).subscribe(() => {
          this.MS.GetAllMembers().subscribe((x) => {
            this.dataSource = x;
          });
        });
      }
    });
  }

}
