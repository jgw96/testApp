import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public color: string = 'primary';
  public items: any[] = [];
  public colorProp: string;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter() {
    setInterval(() => {
      if (this.color === 'primary') {
        this.color = 'secondary';
      } else if (this.color === 'secondary') {
        this.color = 'primary';
      }
    }, 1000);

    for (let i = 0; i < 5; i++) {
      this.items.push({
        name: 'ionic'
      })
    }
  }

  alert() {
    window.alert('a badge was clicked');
  }

}
