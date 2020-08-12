import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListReoderPageRoutingModule } from './list-reoder-routing.module';

import { ListReoderPage } from './list-reoder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListReoderPageRoutingModule
  ],
  declarations: [ListReoderPage]
})
export class ListReoderPageModule {}
