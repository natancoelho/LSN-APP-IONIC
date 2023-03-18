import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LsnpassPage } from './lsnpass.page';

const routes: Routes = [
  {
    path: '',
    component: LsnpassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LsnpassPageRoutingModule {}
