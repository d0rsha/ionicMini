import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

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

      console.log(window)
      this.printInfo()
      
      window['ReportFullyDrawn'].reportFullyDrawn();
      window['ReportFullyDrawn'].printInfo();
    });
  }

  printInfo() {
    //Add from current format=device: Device {cordova:7.0.0,manufacturer:Google,model:Android SDK built for x86,platform:Android,serial:EMULATOR28X0X23X0,version:8.1.0
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

