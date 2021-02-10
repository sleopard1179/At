import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-atme-messages',
  styleUrls: ['./atme-messages.component.scss'],
  template: `
  <ion-header translucent>
    <ion-toolbar>
      <ion-title>{{inputData.title}}</ion-title>
      <ion-buttons slot="end">
        <ion-button (click)="dismiss()">Close</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content fullscreen>
    <ion-list>
      <ion-item>
        <ion-avatar slot="start">
          <img src="{{inputData.photo}}"/>
        </ion-avatar>
        <ion-label>
          <h2>{{inputData.name}}</h2>
          <p>{{inputData.message}}</p>
        </ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
  `
})
export class AtmeMessagesComponent implements OnInit {

  @Input() type: string;
  inputData: any;
  templateInbox = {
    title: 'Your Inbox',
    name: 'Michael Kunchal',
    message: 'Sent Instagram, LinkedIn and Photo',
    photo: '../../assets/icon/favicon.png'
  };
  templateOutbox = {
    title: 'Your Outbox',
    name: 'Michael Kunchal',
    message: 'You have recieved the users Instagram, LinkedIn and Photo, click for more details!',
    photo: '../../assets/icon/favicon.png'
  };

  constructor(private modalCtrl: ModalController) {
  }
  ngOnInit() { 
    if (this.type === '0') {
      this.inputData = this.templateInbox;
    } else {
      this.inputData = this.templateOutbox;
    }
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
