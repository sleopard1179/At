import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-item',
  styleUrls: ['./social-item.component.scss'],
  template: `
  <ion-item color="primary">
      <ion-avatar slot="end">
        <!--PUT SOCIAL MEDIA LOGOS HERE-->
        <!-- <img src="assets/profile-picture/profile-picture.png"> -->
        <ion-icon name="logo-instagram"></ion-icon>
      </ion-avatar>
      <ion-label>
        <h2>Instagram</h2>
        <h3>Status: Not Connected | Connected This is Username</h3>
        <p>Instagram Link Here</p>
      </ion-label>
  </ion-item>
  `
})
export class SocialItemComponent implements OnInit {

  var templateList = [
    { title: 'Instagram',
      status: 'Status: Not Connected',
      link: '',
      icon: 'logo-instagram'
    }
  ]

  constructor() { }

  ngOnInit() {}

}
