import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
//import{FlexLayoutModule} from ''

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import { MemberFormComponent } from './member-form/member-form.component';

import {MatGridListModule} from "@angular/material/grid-list";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { TemplateComponent } from './template/template.component';
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import { ArticleComponent } from './article/article.component';
import { LoginComponent } from './login/login.component';
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {firebaseConfig} from "./environment";
import {AngularFireModule} from "@angular/fire/compat";
import { EvenementComponent } from './evenement/evenement.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import { ModalEvenementComponent } from './modal-evenement/modal-evenement.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import {NgChartsModule} from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MemberFormComponent,
    ConfirmDialogComponent,
    TemplateComponent,
    ArticleComponent,
    LoginComponent,
    EvenementComponent,
    ModalEvenementComponent,
    DashboardComponent
  ],
    imports: [
      MatCardModule,
      NgChartsModule,
      MatDatepickerModule,
      MatNativeDateModule, //date system
        MatSortModule,
      MatPaginatorModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatTableModule,
        HttpClientModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatGridListModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatButtonModule,
        MatGridListModule,
        MatIconModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
