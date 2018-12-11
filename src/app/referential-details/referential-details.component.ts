import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatOptionSelectionChange
} from "@angular/material";
import { Referential } from "src/Models/Referential";
import { Annexes } from "src/Models/Annexes";
import { AnnexesService } from "../services/annexes-service/annexes.service";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { isNullOrUndefined } from "util";
@Component({
  selector: "app-referential-details",
  templateUrl: "./referential-details.component.html",
  styleUrls: ["./referential-details.component.css"],
  providers: [AnnexesService]
})
export class ReferentialDetailsComponent implements OnInit {
  referential: Referential;
  annexesList: Array<Annexes>;
  annexesService: AnnexesService;
  myControl: FormControl;
  annexe: Annexes;
  constructor(
    private service: AnnexesService,
    public dialogRef: MatDialogRef<ReferentialDetailsComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { ref: Referential }
  ) {}
  ngOnInit() {
    this.referential = new Referential();
    this.referential = this.data.ref;
    this.annexesService = new AnnexesService();
    this.annexesList = new Array<Annexes>();
    this.myControl = new FormControl();
    this.annexe = new Annexes();
    this.annexesList = this.annexesService.getAnnexesListByRefID(
      this.referential.ID
    );
  }

  setAnnex(event: MatOptionSelectionChange, anx: Annexes) {
    this.annexe = anx;
  }

  shouldShowDownloadButtons(): boolean {
    return !isNullOrUndefined(this.annexe.ID);
  }
}
