import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fabs',
  styleUrls: ['./fabs.component.scss'],
  template: `
  <ion-fab horizontal="end" vertical="bottom" slot="fixed">
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
  `
})
export class FabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
