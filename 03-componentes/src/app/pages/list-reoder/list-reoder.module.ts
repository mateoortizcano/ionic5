import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListReoderPageRoutingModule } from './list-reoder-routing.module';

import { ListReoderPage } from './list-reoder.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListReoderPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListReoderPage]
})
export class ListReoderPageModule { }
