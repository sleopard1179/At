import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApplePay } from '@ionic-native/apple-pay/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';

@Component({
  selector: 'app-buy-modal',
  styleUrls: ['./buy-modal.component.scss'],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title slot="start">Purchase Messaging Tag</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="dismiss()">
            Dismiss
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card class="buy-title-card">
        <ion-card-content>
          <ion-card-title slot="center">Enter Shipping Address below</ion-card-title>
          <ion-card-subtitle slot="center">Limit to one per customer</ion-card-subtitle>
        </ion-card-content>
      </ion-card>
      <ion-card class="buy-shipping-card">
        <ion-card-content>
          <ion-grid fixed>
            <ion-row>
              <ion-col size="12">
                <ion-item>
                  <ion-label position="floating" color="dark" id="address-one">Address Line One</ion-label>
                  <ion-input id="address-one"></ion-input>
                </ion-item>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="12">
                <ion-item>
                  <ion-label position="floating" color="dark" id="address-two">Address Line Two</ion-label>
                  <ion-input id="address-two"></ion-input>
                </ion-item>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="8">
                <ion-item>
                  <ion-label position="floating" color="dark">City</ion-label>
                  <ion-input></ion-input>
                </ion-item>
              </ion-col>
              <ion-col size="4">
                <ion-item>
                  <ion-label position="floating" color="dark">State</ion-label>
                  <ion-input></ion-input>
                </ion-item>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="5">
                <ion-item>
                  <ion-label position="floating" color="dark">Zip Code</ion-label>
                  <ion-input></ion-input>
                </ion-item>
              </ion-col>
              <ion-col size="7">
                <ion-button (click)="cardClick()" id="payment-button">
                    <ion-icon slot="start" name="add"></ion-icon>
                    Go to Payment
                </ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>
    </ion-content>
  `
})
export class BuyModalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  dismiss(): void {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
  cardClick(): void {

  }

}
