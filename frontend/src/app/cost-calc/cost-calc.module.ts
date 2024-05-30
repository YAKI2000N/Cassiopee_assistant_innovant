import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CostCalcPageRoutingModule } from './cost-calc-routing.module';

import { CostCalcPage } from './cost-calc.page';
import { SharedModule } from '../shared/shared.module';
import { CostCoreCalcComponent } from './cost-core-calc/cost-core-calc.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostCalcPageRoutingModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: CostCalcPage }]),
  ],
  declarations: [
    CostCalcPage,
    CostCoreCalcComponent
  ],
  exports: [
    CostCoreCalcComponent
  ]
})
export class CostCalcPageModule { }
