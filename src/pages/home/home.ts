import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';


// pages
import { DrawPage } from '../draw/draw';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public modalController: ModalController,
    public navCtrl: NavController) {

  }

  onClickEdit() {
    this.modalController.create(DrawPage).present();
  }

}
