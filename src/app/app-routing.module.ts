import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MemberFormComponent} from "./member-form/member-form.component";
import {MemberComponent} from "./member/member.component";
import {ArticleComponent} from "./article/article.component";
import {LoginComponent} from "./login/login.component";
import {EvenementComponent} from "./evenement/evenement.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path:'add',
    pathMatch:'full',//maya3mil matching m3a path kan ki yebda y
    component:MemberFormComponent
  },
  {
    path:'member',
    pathMatch:'full',
    component:MemberComponent
  },
  {
    path:'evenement',
    pathMatch:'full',
    component:EvenementComponent
  },
  {
    path:'dashboard',
    pathMatch:'full',
    component:DashboardComponent
  },
  {
    path:'',
    pathMatch:'full',
    component:LoginComponent
  },
  {
    path:'login',
    pathMatch:'full',
    component:LoginComponent
  },
  {
    path:'article',
    pathMatch:'full',
    component:ArticleComponent
  },
  {
    path:':id/edit',
    pathMatch:'full',
    component:MemberFormComponent
  },
  {
    path:'**',
    component:MemberComponent,
  }
  //programmer le path /add=>MemberFormComp
  //programmer le path ""=>MemberComp
  //w9efna lina
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
