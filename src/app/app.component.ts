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
  start
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.start = performance.now();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      console.log(window)
      this.printInfo()
      // Add report fully drawn + printouts 
      window['ReportFullyDrawn'].reportFullyDrawn();

      // App is initialized here !
      this.fpm = window['FirebasePlugin']

      this.fpm.setPerformanceCollectionEnabled(true);
      this.fpm.setAnalyticsCollectionEnabled(true);
    });
  }

  printInfo() {
    //Add from current format=device: Device {cordova:7.0.0,manufacturer:Google,model:Android SDK built for x86,platform:Android,serial:EMULATOR28X0X23X0,version:8.1.0
    console.log('ionic platform ready:', performance.now() - this.start)
    console.log(`device: Device {approach:hybrid,cordova:${window['device'].cordova}7.0.0,manufacturer:${window['device'].manufacturer},model:${window['device'].model},platform:${window['device'].platform},serial:${window['device'].serial},version:${window['device'].version},isVirtual:${window['device'].isVirtual},uuid:${window['device'].uuid}`)
    console.log(`device: MemoryUsage {jsHeapSizeLimit:${window.performance['memory'].jsHeapSizeLimit},totalJSHeapSize:${window.performance['memory'].totalJSHeapSize},usedJSHeapSize:${window.performance['memory'].usedJSHeapSize}`)
    console.log(`device: BrowserTiming {timeOrigin:${window.performance.timeOrigin},\
                connectEnd:${window.performance['timing'].connectEnd},\
                connectStart:${window.performance['timing'].connectStart},\
                domComplete:${window.performance['timing'].domComplete},\
                domContentLoadedEventEnd:${window.performance['timing'].domContentLoadedEventEnd},\
                domContentLoadedEventStart:${window.performance['timing'].domContentLoadedEventStart},\
                domInteractive:${window.performance['timing'].domInteractive},\
                domLoading:${window.performance['timing'].domLoading},\
                domainLookupEnd:${window.performance['timing'].domainLookupEnd},\
                domainLookupStart:${window.performance['timing'].domainLookupStart},\
                fetchStart:${window.performance['timing'].fetchStart},\
                loadEventEnd:${window.performance['timing'].loadEventEnd},\
                loadEventStart:${window.performance['timing'].loadEventStart},\
                navigationStart:${window.performance['timing'].navigationStart},\
                requestStart:${window.performance['timing'].requestStart}`)
  }
}

