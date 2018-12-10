import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferentialComponent } from './referential/referential.component';

const routes: Routes = [{ path: 'refs', component: ReferentialComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
