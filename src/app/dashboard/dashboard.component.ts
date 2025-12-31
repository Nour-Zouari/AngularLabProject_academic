import { Component } from '@angular/core';
import {MemberService} from "../../services/member.service";
import {EvenementService} from "../../services/evenement.service";
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  Nb_membres =0;
  Nb_Tools =0;
  Nb_Events =0;
  Nb_Pub =0;
  Nb_teacher:number=0;
  Nb_student:number=0;
  chartDataPie: ChartDataset[] = [
    {
      data: [ ]
    }
  ];
  chartDataLine: ChartDataset[] = [
    {
      data: []
    }
  ];
  chartLabelsPie: string[] = ['Student','Teacher'];
  chartOptions: ChartOptions = {};
  chartLabelsLine: string[] = [];
  tabLine1:string[]=[];
  tabLine2:number[]=[];



  constructor(private Ms: MemberService, private ES:EvenementService) {
    this.Ms.GetAllMembers().subscribe(members => {
      this.Nb_membres=members.length;
      for (let member of members) {
        this.tabLine1.push(member.name);
        this.tabLine2.push(member.tabEvent.length);
        if (member.type=="Etudiant"){
          this.Nb_student++;
        }
        else this.Nb_teacher++;
      }
      this.chartDataPie = [
        {
          data: [this.Nb_student, this.Nb_teacher ]
        }
      ];
      this.chartLabelsLine = this.tabLine1;
      this.chartDataLine= [
        {
          data:this.tabLine2
        }
      ];


    })
  }

}
