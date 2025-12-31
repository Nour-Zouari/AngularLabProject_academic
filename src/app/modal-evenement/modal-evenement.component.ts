import {Component, Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MemberService} from "../../services/member.service";
import {EvenementService} from "../../services/evenement.service";

@Component({
  selector: 'app-modal-evenement',
  templateUrl: './modal-evenement.component.html',
  styleUrls: ['./modal-evenement.component.css']
})
export class ModalEvenementComponent {
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalEvenementComponent>, // =>le composant apparait en tant que boite
    private ES:EvenementService,
    @Inject(MAT_DIALOG_DATA) data:any // pour recuperer l'id
  ) {
    if (data){
      this.ES.getEvenementByID(data).subscribe((evenement) => {
        this.form=new FormGroup({
          titre: new FormControl(evenement.titre),
          date_debut: new FormControl(evenement.date_debut),
          date_fin: new FormControl(evenement.date_fin),
          lieu: new FormControl(evenement.lieu),
        })
      })
    }
  }

  form!: FormGroup;
  titre!: string;
  date_debut!: string;
  date_fin!: string;
  lieu!: string;

  ngOnInit() {
    this.form = this.fb.group({
      titre: [this.titre, []],
      date_debut :[this.date_debut, []],
      date_fin:[this.date_fin, []],
      lieu:[this.lieu, []]
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
