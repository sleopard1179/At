import {  Component,
          Input,
          OnInit,
          ViewChild
        } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-cards',
  styleUrls: ['./cards.component.scss'],
  template: `
    <ion-card [ngSwitch]="type">
      <div *ngSwitchCase="0">
        <ion-card-header>
          <ion-grid>
            <ion-row>
              <ion-title class="profile-card-title"> Your Profile </ion-title>
              <ion-chip class="profile-chip">
                <ion-avatar class="profile-chip-avatar">
                  <img src="../../assets/icon/favicon.png">
                </ion-avatar>
                <ion-label>{{ this.userName }}</ion-label>
              </ion-chip>
            </ion-row>
          </ion-grid>
        </ion-card-header>
      </div>
      <div *ngSwitchCase="1">
        <app-lists [type]="0"></app-lists>
      </div>
      <div *ngSwitchCase="2">
        <app-lists [type]="1"></app-lists>
      </div>
      <div *ngSwitchCase="3">
        <app-lists [type]="2"></app-lists>
      </div>
    </ion-card>
  `
})
export class CardsComponent implements OnInit {

  @Input() type: number;
  userName = 'Michael Kunchal';

  constructor() { }

  ngOnInit() {}
  

}
