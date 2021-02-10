import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-buy-modal',
  styleUrls: ['./buy-modal.component.scss'],
  template: `
  
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

}
