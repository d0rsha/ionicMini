import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from './../environments/environment';

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
    this.platform.ready().then((readySource) => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      console.log('Platform.ready(): ', readySource)
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

  makeHttpRequest() {
    console.log('HTTP-Request try new request')
    const url = `https://minimal-c0b75.firebaseio.com/test/${window["device"].manufacturer}.json`

    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    var theUrl = "/json-handler";
    xmlhttp.open("POST", url);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.onreadystatechange = function() { // Call a function when the state changes.
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          // Request finished. Do processing here.
          console.log('HTTP-Request Sent successfully')
      }
  }
    
    xmlhttp.send(JSON.stringify( window['device'] ));
  }
}

