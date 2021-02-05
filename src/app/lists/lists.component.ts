import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() type: number;
  socials =
    [
        {
            title: 'Instagram',
            status: 'Status: Not Connected', // This is where the username for the profile will go.
            link: '', // This is the link for the Instagram
            icon: 'logo-instagram', // Whether this is the icon for the social media or picture
            isFilled: false // Where this turns to true when showing links on the button below.
        },
        {
            title: 'Twitter',
            status: 'Status: Not Connected',
            link: '',
            icon: 'logo-twitter',
            isFilled: false
        },
        {
            title: 'Facebook',
            status: 'Status: Not Connected',
            link: '',
            icon: 'logo-facebook',
            isFilled: false
        },
        {
            title: 'Snapchat',
            status: 'Status: Not Connected',
            link: '',
            icon: 'logo-snapchat',
            isFilled: false
        },
        {
            title: 'LinkedIn',
            status: 'Status: Not Connected',
            link: '',
            icon: 'logo-linkedin',
            isFilled: false
        },
        {
            title: 'TikTok',
            status: 'Status: Not Connected',
            link: '',
            icon: 'logo-tiktok',
            isFilled: false
        },
        {
            title: 'Youtube',
            status: 'Status: Not Connected',
            link: '',
            icon: 'logo-youtube',
            isFilled: false
        },
        {
            title: 'Twitch',
            status: 'Status: Not Connected',
            link: '',
            icon: 'logo-twitch',
            isFilled: false
        },
        {
            title: 'Pinterest',
            status: 'Status: Not Connected',
            link: '',
            icon: 'logo-pinterest',
            isFilled: false
        },
        {
            title: 'Custom Link',
            status: 'Status: Not Connected',
            link: '',
            icon: 'desktop-outline',
            isFilled: false
        }
    ];


  constructor() {
  }

  ngOnInit() {}

}
