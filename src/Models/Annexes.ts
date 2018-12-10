import { AssujettisEnum } from './AssujettisEnum';
import { PeriodicityEnum } from './PeriodicityEnum';
import { TransmissionDelayEnum } from './TransmissionDelayEnum';
import { TransmissionFormatEnum } from './TransmissionFormatEnum';

export class Annexes {
  Title: string;
  ID: string;
  AssujettisEtab: Array<AssujettisEnum>;
  Periodicity: PeriodicityEnum;
  TransmissionDelay: TransmissionDelayEnum;
  TransmissionFormat: TransmissionFormatEnum;
  ReferentialId: string;
  constructor(
    title?: string,
    id?: string,
    assujettis?: Array<AssujettisEnum>,
    periodicity?: PeriodicityEnum,
    transmissionDelay?: TransmissionDelayEnum,
    transmissionFormat?: TransmissionFormatEnum,
    referentialId?: string
  ) {
    this.Title = title;
    this.ID = id;
    this.AssujettisEtab = assujettis;
    this.TransmissionDelay = transmissionDelay;
    this.TransmissionFormat = transmissionFormat;
    this.ReferentialId = referentialId;
    this.Periodicity = periodicity;
  }
}
