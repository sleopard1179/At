import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fabs',
  styleUrls: ['./fabs.component.scss'],
  template: `
  <ion-fab *ngIf="isRight" horizontal="end" vertical="bottom">
    <ion-fab-button color="light">
      <!-- md="caret-up" ios="chevron-up-circle-outline"-->
      <ion-icon name="paper-plane-outline"></ion-icon>
    </ion-fab-button>
    <ion-fab-list side="top">
      <ion-fab-button color="light">
        <ion-icon name="logo-facebook"></ion-icon>
      </ion-fab-button>
      <ion-fab-button color="light">
        <ion-icon name="logo-twitter"></ion-icon>
      </ion-fab-button>
      <ion-fab-button color="light">
        <ion-icon name="logo-vimeo"></ion-icon>
      </ion-fab-button>
    </ion-fab-list>
    <ion-fab-list side="start">
      <ion-fab-button color="light">
        <ion-icon name="logo-facebook"></ion-icon>
      </ion-fab-button>
      <ion-fab-button color="light">
        <ion-icon name="logo-twitter"></ion-icon>
      </ion-fab-button>
      <ion-fab-button color="light">
        <ion-icon name="logo-vimeo"></ion-icon>
      </ion-fab-button>
    </ion-fab-list>
  </ion-fab>
  <ion-fab *ngIf="!isRight" horizontal="start" vertical="bottom">
    <ion-button expand="block" color="secondary">Send All</ion-button>
  </ion-fab>
  <!-- Send All Feature -->
  `
})
export class FabsComponent implements OnInit {

  @Input() isRight: boolean;

  constructor() { }

  ngOnInit() {}

}
