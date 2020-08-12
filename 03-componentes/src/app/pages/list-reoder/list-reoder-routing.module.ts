import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListReoderPage } from './list-reoder.page';

const routes: Routes = [
  {
    path: '',
    component: ListReoderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListReoderPageRoutingModule {}
