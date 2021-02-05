import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-item',
  styleUrls: ['./social-item.component.scss'],
  template: `
  <ion-item color="primary">
      <ion-avatar slot="end">
        <!--PUT SOCIAL MEDIA LOGOS HERE-->
        <!-- <img src="assets/profile-picture/profile-picture.png"> -->
        <ion-icon name="{{ icon }}"></ion-icon>
      </ion-avatar>
      <ion-label>
        <h2>{{ title }}</h2>
        <h3>{{ status }}</h3>
        <p>{{ link }}</p>
      </ion-label>
  </ion-item>
  `
})
export class SocialItemComponent implements OnInit {

  @Input() title: string;
  @Input() status: string;
  @Input() link: string;
  @Input() icon: string;
  @Input() isFilled: boolean;

  constructor() { }

  ngOnInit() {}

}
