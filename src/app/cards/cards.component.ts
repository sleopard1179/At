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
          <img id="profilePicture" src="assets/profile-picture/profile-picture.png" alt="Profile Picture" />
          <ion-card-title>
            {{ this.userName }}
          </ion-card-title>
        </ion-card-header>
      </div>
      <div *ngSwitchCase="1">
        <app-lists [type]="0"></app-lists>
      </div>
      <div *ngSwitchCase="2">
        <app-lists [type]="1"></app-lists>
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
