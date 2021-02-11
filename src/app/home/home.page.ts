import { Component } from '@angular/core';
import { AlertController, MenuController, ToastController, ModalController } from '@ionic/angular';
import { AtmeMessagesComponent } from '../atme-messages/atme-messages.component';
import { BuyModalComponent } from '../buy-modal/buy-modal.component';
import { ProfileModalComponent } from '../profile-modal/profile-modal.component';
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
        <ion-item (click)="presentInboxModal()">
          <ion-icon name="mail" slot="start"></ion-icon>
          <ion-label>Inbox</ion-label>
        </ion-item>
        <ion-item (click)="presentOutboxModal()">
          <ion-icon name="paper-plane" slot="start"></ion-icon>
          <ion-label>Outbox</ion-label>
        </ion-item>
        <ion-item (click)="presentProfileModal()">
          <ion-icon name="person-circle-outline" slot="start"></ion-icon>
          <ion-label>Profile & Settings</ion-label>
        </ion-item>
        <ion-item (click)="presentBuyModal()">
          <ion-icon name="bag-add-outline" slot="start"></ion-icon>
          <ion-label>Buy @Me Tag</ion-label>
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
        <ion-button (click)="presentAlertConfirm()">
          <ion-icon id="nfc-nav" slot="icon-only" name="journal-outline"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>

  <ion-content [fullscreen]="true" [scrollEvents]="true">
    <div id="bg-home"></div>
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
  currentModal: ModalController;

  constructor(private menu: MenuController, public alertController: AlertController, public modalController: ModalController) {}

  public nextPage(): void {
    this.testVar = 1;
    console.log('Testing Function');
  }

  public logScrollStart(): void {
    console.log('Scroll Started');
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'nfc-alert-class',
      header: 'Connecting NFC Tag',
      message: 'Would you like to connect an NFC Tag?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentInboxModal() {
    console.log('Pressing Inbox Modal');
    const modal = await this.modalController.create({
      component: AtmeMessagesComponent,
      cssClass: 'atme-messages-class',
      componentProps: {
        type: '0'
      }
    });
    return await modal.present();
  }
  async presentOutboxModal() {
    console.log('Pressing Outbox Modal');
    const modal = await this.modalController.create({
      component: AtmeMessagesComponent,
      cssClass: 'atme-messages-class',
      componentProps: {
        type: '1'
      }
    });
    return await modal.present();
  }

  async presentProfileModal() {
    console.log('Pressing Outbox Modal');
    const modal = await this.modalController.create({
      component: ProfileModalComponent,
      cssClass: 'atme-profile-class'
    });
    return await modal.present();
  }
  async presentBuyModal() {
    console.log('Pressing Outbox Modal');
    const modal = await this.modalController.create({
      component: BuyModalComponent,
      cssClass: 'atme-buy-class',
      componentProps: {
        type: '1'
      }
    });
    return await modal.present();
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
