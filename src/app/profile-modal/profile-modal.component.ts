import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile-modal',
  styleUrls: ['./profile-modal.component.scss'],
  template: `
  <ion-header>
    <ion-toolbar>
      <ion-title>Profile and Settings</ion-title>
      <ion-buttons slot="end">
        <ion-button (click)="dismiss()">
          {{saveClose}}
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-item>
        <ion-label><h2>Profile</h2></ion-label>
        <ion-card color="primary">

        </ion-card>
      </ion-item>
      <ion-item>
        <ion-label><h2>Preferences</h2></ion-label>
        <ion-card color="primary">

        </ion-card>
      </ion-item>
      <ion-item>
        <ion-label><h2>@Me Tags</h2></ion-label>
        <ion-card color="primary">

        </ion-card>
      </ion-item>
      <ion-item>
        <ion-label><h2>Settings</h2></ion-label>
        <ion-card color="primary">

        </ion-card>
      </ion-item>
    </ion-list>
  </ion-content>
  `
})
export class ProfileModalComponent implements OnInit {

  saveClose: string;
  isClose = true;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    if (this.isClose) {
      this.saveClose = 'Close';
    } else {
      this.saveClose = 'Save';
    }
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
