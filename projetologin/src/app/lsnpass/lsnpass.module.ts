import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LsnpassPageRoutingModule } from './lsnpass-routing.module';
import { LsnpassPage } from './lsnpass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LsnpassPageRoutingModule
  ],
  declarations: [LsnpassPage]
})
export class LsnpassPageModule {}
