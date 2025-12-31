import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Evenement} from "../../models/Evenement";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {EvenementService} from "../../services/evenement.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ModalEvenementComponent} from "../modal-evenement/modal-evenement.component";

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'titre', 'date_debut', 'date_fin','lieu', 'actions'];
  dataSource = new MatTableDataSource<Evenement>([]);
//MatTable data source kima arraylist fi java (sort, paginator aliha)

  @ViewChild(MatPaginator) paginator!: MatPaginator; //le ! c'est pour initialiser
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private ES :EvenementService, private dialog :MatDialog) {
    this.ES.getAllEvenement().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }
  ngOnInit() {
    this.loadData();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  loadData() {
    this.ES.getAllEvenement().subscribe(data => {
      console.log('EVENEMENTS REÇUS :', data);

      this.dataSource.data = data;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  open() {
    // ouverture de la boite
    let dialogREF= this.dialog.open(ModalEvenementComponent, {
      height:'300px',
      width: '500px',
    })
    dialogREF.afterClosed().subscribe((x) => {
      this.ES.addEvenement(x).subscribe(()=>{
        this.ES.getAllEvenement().subscribe((resp)=>{
          this.dataSource.data = resp;
        })
      })
    })
  }
  openEdit(id: string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = id;

    let dialogREF= this.dialog.open(ModalEvenementComponent, dialogConfig)

    dialogREF.afterClosed().subscribe((x) => {
      this.ES.updateEvenement(id,x).subscribe(()=>{
        this.ES.getAllEvenement().subscribe((resp)=>{
          this.dataSource.data = resp;
        })
      })
    })
  }
}
