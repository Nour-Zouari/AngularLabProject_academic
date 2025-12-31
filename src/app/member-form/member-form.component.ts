import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MemberService} from "../../services/member.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {

  //injection de dependance
  constructor(private Ms:MemberService,private router:Router,private activatedRoute:ActivatedRoute) {
  }
  form!: FormGroup;
  ngOnInit(): void {
    //1.recuperer la route active
    const idCourant=this.activatedRoute.snapshot.params['id']

    //2.si la route contient id
    if(idCourant) {
      //getMemberByID(id)=>extraction dans la form
      this.Ms.GetMemberByID(idCourant).subscribe((member)=>{
        this.form=new FormGroup({
          cin: new FormControl(member.cin),
          name:new FormControl(member.name),
          type:new FormControl(member.type),
          cv:new FormControl(member.cv),
          date:new FormControl(member.date)
        })
      })
    }
    //3.sinon je suis dans Add
    //initialiser la formulaire
    this.form = new FormGroup({
      cin: new FormControl(null),
      name: new FormControl(null),
      type: new FormControl(null),
      cv: new FormControl(null),
      date:new FormControl(new Date())
    })
  }

  sub() {
    const idCourant=this.activatedRoute.snapshot.params['id'];
    if(idCourant){
      this.Ms.UpdateMember(idCourant,this.form.value).subscribe(()=>{
        this.router.navigate(['/member'])
      })
    }
    else{
      //injecter le service et appler la fonction AddMember
      this.Ms.AddMember(this.form.value).subscribe(() => {
        this.router.navigate(["/member"])
      });
    }
    console.log(this.form.value);
  }
}
