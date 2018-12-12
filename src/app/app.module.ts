import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReferentialComponent } from './referential/referential.component';
import { ReferentialMaterialModule } from '../material-modules';
import { ReferentialDetailsComponent } from './referential-details/referential-details.component';
import { MatDialogModule, MAT_DATE_LOCALE } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
  declarations: [
    AppComponent,
    ReferentialComponent,
    ReferentialDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReferentialMaterialModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule
  ],
  entryComponents: [ReferentialDetailsComponent],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }],
  bootstrap: [AppComponent]
})
export class ReferentialAppModule {}
