import { Component } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  styleUrls: ['home.page.scss'],
  template: `
  <ion-menu side="start" menuId="first" contentId="main">
    <ion-header>
      <ion-toolbar translucent>
        <ion-title><img id="menu-icon" src="../../assets/icon/favicon.png" alt="Atme Logo"/></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-icon name="mail" slot="start"></ion-icon>
          <ion-label>Inbox</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon name="paper-plane" slot="start"></ion-icon>
          <ion-label>Outbox</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon name="person-circle-outline" slot="start"></ion-icon>
          <ion-label>Profile & Settings</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
  <ion-router-outlet id="main"></ion-router-outlet>
  <ion-header [translucent]="true">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button (click)="open(menuClosed)"></ion-menu-button>
      </ion-buttons>
      <ion-buttons slot="end">
        <ion-button>
          <ion-icon slot="icon-only" name="magnet-sharp"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>

  <ion-content [fullscreen]="true" [scrollEvents]="true">
    <div id="bg"></div>
    <div id="container">
      <app-cards [type]="0"></app-cards>
      <!--<strong>Ready to create an app?</strong>
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p> -->
      <app-cards [type]="1"></app-cards>
      
      <app-cards [type]="2"></app-cards>

      <app-cards [type]="3"></app-cards>
    </div>
    <app-fabs [isRight]="true"></app-fabs>
    <app-fabs [isRight]="false"></app-fabs>
  </ion-content>
  `
})
export class HomePage {

  testVar = 0;
  menuClosed = false;

  constructor(private menu: MenuController) {}

  public nextPage(): void {
    this.testVar = 1;
    console.log('Testing Function');
  }

  public logScrollStart(): void {
    console.log('Scroll Started');
  }
  open(isOpen: boolean): void {
    console.log(isOpen);
    console.log('Pressing Menu Button')
    if (!isOpen) {
      this.menu.enable(true, 'first');
      this.menu.open('first');
      this.menuClosed = true;
    } else {
      this.menu.open('end');
      this.menuClosed = false;
    }
  }

}
