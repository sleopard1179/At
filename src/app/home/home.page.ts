import { Component } from '@angular/core';

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
      <strong>Ready to create an app?</strong>
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
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
