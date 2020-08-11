import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinitescrollPageRoutingModule } from './infinitescroll-routing.module';

import { InfinitescrollPage } from './infinitescroll.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfinitescrollPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfinitescrollPage]
})
export class InfinitescrollPageModule { }
