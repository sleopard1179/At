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
    <ion-card [ngSwitch]="isHomeScreen">
      <div *ngSwitchCase="true">
        <ion-card-header>
          <img id="profilePicture" src="assets/profile-picture/profile-picture.png" alt="Profile Picture" />
          <ion-card-title>
            {{ this.userName }}
          </ion-card-title>
        </ion-card-header>
      </div>
      <div *ngSwitchCase="false">
        <ion-button (click)="toggleInfiniteScroll()" expand="block">
          Toggle Infinite Scroll
        </ion-button>

        <ion-list></ion-list>

        <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)">
          <ion-infinite-scroll-content
            loadingSpinner="bubbles"
            loadingText="Loading more data...">
          </ion-infinite-scroll-content>
        </ion-infinite-scroll>
      </div>
    </ion-card>
  `
})
export class CardsComponent implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @Input() isHomeScreen = true;
  userName = 'Michael Kunchal';

  constructor() { }

  ngOnInit() {}
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (event.data.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
