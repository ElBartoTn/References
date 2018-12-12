import { Injectable } from '@angular/core';
import { Referential } from '../../../Models/Referential';

@Injectable({
  providedIn: 'root'
})
export class ReferentialService {
  constructor() {}

  generateReferentialList(): Array<Referential> {
    const referentialList = new Array<Referential>();
    referentialList.push(new Referential('1-REPORTING COMPTABLE', 'RC', true));
    referentialList.push(
      new Referential(
        '2-REPORTTING << STATISTIQUES MONETAIRES ET FINANCIERS >>',
        'RSMFM',
        true
      )
    );
    referentialList.push(new Referential('3-REPORTING PRUDENTIEL', 'RP', true));
    referentialList.push(
      new Referential('SD 1-RISQUE DE CREDIT', 'RPC', false)
    );
    referentialList.push(
      new Referential('SD 2-RISQUE DE LIQUIDITE', 'RPL', true)
    );
    referentialList.push(new Referential('SD 3-RISQUE DE TAUX', 'RPT', true));
    referentialList.push(
      new Referential('SD 4-RISQUE OPERATIONNEL', 'RPO', true)
    );
    referentialList.push(
      new Referential(
        'SD 5-RESPECT DES NORMES LEGALES ET PRUDENTIELLES',
        'RNLP',
        true
      )
    );
    referentialList.push(
      new Referential('4-REPORTING SUR BASE CONSOLIDEE', 'RBC', true)
    );
    referentialList.push(
      new Referential(
        '5-REPORTING SUR LES DISPOSITIFS DE GOUVERNANCE, DE CONSTROLE INTERNE ET DE GESTION DES RISQUES',
        'RGCIGR',
        false
      )
    );
    referentialList.push(new Referential('SD 1: GOUVERNANCE', 'RC', true));
    referentialList.push(new Referential('SD 2: CONTROLE INTERNE', 'RG', true));
    referentialList.push(
      new Referential('SD 3: GESTION DES RISQUES', 'RGR', true)
    );
    referentialList.push(new Referential('SD 4: CONFORMITE', 'RCONF', true));
    referentialList.push(new Referential('SD 5: LBA/FT', 'RLAB/FT', true));
    referentialList.push(
      new Referential('6- REPORTING D\'ORDRE GENERALE', 'RDG', true)
    );
    referentialList.push(
      new Referential(
        '7- REPORTING REVU PAR LES COMMISSAIRES AUX COMPTES',
        'RCAC',
        true
      )
    );
    return referentialList;
  }
}
