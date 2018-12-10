import { Component, OnInit } from '@angular/core';
import { ReferentialService } from '../services/referentials-service/referential.service';
import { MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material';
import { ReferentialDetailsComponent } from '../referential-details/referential-details.component';

import { from } from 'rxjs';
import { Referential } from 'src/Models/Referential';
@Component({
  selector: 'app-referential',
  templateUrl: './referential.component.html',
  styleUrls: ['./referential.component.css']
})
export class ReferentialComponent implements OnInit {
  refrentialsService: ReferentialService;
  referentialList: Array<Referential>;
  displayedColumns: string[] = ['Title', 'ShortTitle', 'Consult'];
  dataSource: any;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.refrentialsService = new ReferentialService();
    this.referentialList = new Array<Referential>();
    this.referentialList = this.refrentialsService.generateReferentialList();
    this.dataSource = new MatTableDataSource(this.referentialList);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openReferentialDetails(referential: Referential) {
    const dialogRef = this.dialog.open(ReferentialDetailsComponent, {
      height: '90%',
      width: '50%',
      data: { ref: referential }
    });
  }
}
