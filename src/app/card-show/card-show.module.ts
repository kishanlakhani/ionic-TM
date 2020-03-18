import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardShowPageRoutingModule } from './card-show-routing.module';

import { CardShowPage } from './card-show.page';
import { RouterModule } from '@angular/router';
import { PostShowPageModule } from './post-show/post-show.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostShowPageModule,
    CardShowPageRoutingModule,
  ],
  declarations: [CardShowPage],
  exports:[CardShowPage]
})
export class CardShowPageModule {}
