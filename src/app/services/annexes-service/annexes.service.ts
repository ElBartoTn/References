import { Injectable } from '@angular/core';
import { Annexes } from 'src/Models/Annexes';
import { AssujettisEnum } from 'src/Models/AssujettisEnum';
import { PeriodicityEnum } from 'src/Models/PeriodicityEnum';
import { TransmissionDelayEnum } from 'src/Models/TransmissionDelayEnum';
import { TransmissionFormatEnum } from 'src/Models/TransmissionFormatEnum';

@Injectable({
  providedIn: 'root'
})
export class AnnexesService {
  constructor() {}
  getAnnexesListByRefID(refId: string): Array<Annexes> {
    const annexesList = new Array<Annexes>();
    annexesList.push(
      new Annexes(
        'Situation Mensuelle Comptable Hors-Bilan',
        'RCM01',
        new Array<AssujettisEnum>(
          AssujettisEnum.Affair,
          AssujettisEnum.Factoring,
          AssujettisEnum.Leasing,
          AssujettisEnum.NonResident,
          AssujettisEnum.Resident
        ),
        PeriodicityEnum.Monthly,
        TransmissionDelayEnum.DR15,
        TransmissionFormatEnum.Xml,
        'RC'
      )
    );
    return annexesList.filter(annexe => annexe.ReferentialId === refId);
  }
}
