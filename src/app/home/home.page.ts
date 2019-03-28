import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ionViewDidEnter() {
    // window['FirebasePlugin'].stopTrace('platform_ready_to_first_page')
  }
}
