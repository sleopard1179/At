import {  Component,
          Input,
          OnInit
        } from '@angular/core';

@Component({
  selector: 'app-cards',
  styleUrls: ['./cards.component.scss'],
  template: `
    <ion-card [ngSwitch]="isHomeScreen">
      <div *ngSwitchCase="true">
        <ion-card-header>
          <img id="profilePicture" src="assets/profile-picture/profile-picture.png" alt="Profile Picture" />
          <ion-card-title>
            {{ this.userName }}
          </ion-card-title>
        </ion-card-header>
      </div>
    </ion-card>
  `
})
export class CardsComponent implements OnInit {

  @Input() isHomeScreen = true;
  userName = 'Michael Kunchal';

  constructor() { }

  ngOnInit() {}

}
