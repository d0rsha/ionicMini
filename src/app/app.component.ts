import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  fpm: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // App is initialized here !
      this.fpm = window['FirebasePlugin']

      this.fpm.setPerformanceCollectionEnabled(true);
      this.fpm.setAnalyticsCollectionEnabled(true);

      this.fpm.startTrace('platform_ready_to_first_page', success => {
        console.log(success)
      }, error => {
        console.log(error)
      })
    });
  }
}
