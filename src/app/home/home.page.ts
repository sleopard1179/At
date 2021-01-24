import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular'
@Component({
  selector: 'app-home',
  styleUrls: ['home.page.scss'],
  template: `
  <ion-header [translucent]="true">
    <ion-toolbar>
      <ion-buttons slot="end">
        <img id="right-bar-icon" src="assets/nfc-link-icon/nfc-icon.png" (click)="nextPage()">
      </ion-buttons>
    </ion-toolbar>
  </ion-header>

  <ion-content [fullscreen]="true">
    <div id="bg"></div>
    <div id="container">
      <app-cards [type]="0"></app-cards>
      <!--<strong>Ready to create an app?</strong>
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p> -->
      <app-cards [type]="1"></app-cards>
      <app-cards [type]="2"></app-cards>
    </div>
    <app-fabs></app-fabs>
  </ion-content>
  `
})
export class HomePage {

  testVar = 0;

  constructor() {}

  public nextPage(): void {
    this.testVar = 1;
    console.log('Testing Function');
  }

}
