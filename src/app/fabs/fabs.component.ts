import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fabs',
  styleUrls: ['./fabs.component.scss'],
  template: `
  <ion-fab horizontal="end" vertical="bottom" slot="fixed">
    <ion-fab-button color="light">
      <ion-icon md="caret-back" ios="chevron-back-circle-outline"></ion-icon>
    </ion-fab-button>
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
