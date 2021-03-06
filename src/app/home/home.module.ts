import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CardsComponent } from '../cards/cards.component';
import { FabsComponent } from '../fabs/fabs.component';
import { ListsComponent } from '../lists/lists.component';
import { SocialItemComponent } from '../social-item/social-item.component';
import { AtmeMessagesComponent } from '../atme-messages/atme-messages.component';
import { ProfileModalComponent } from '../profile-modal/profile-modal.component';
import { BuyModalComponent } from '../buy-modal/buy-modal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    CardsComponent,
    FabsComponent,
    ListsComponent,
    SocialItemComponent,
    AtmeMessagesComponent,
    ProfileModalComponent,
    BuyModalComponent
  ]
})
export class HomePageModule {}
