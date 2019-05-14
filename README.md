# Minimal ionic App 
With bare minimum of plugins 

Run 
```bash 
npm install 
ionic cordova run <android|ios>
```


adb -s emulator-5554 install -r "C:\Users\andvre\Documents\ionicMini\platforms\android\app\build\outputs\apk\debug\app-debug.apk"


ionic cordova build android --prod --release
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore platforms/android/app/build/outputs/apk/release/avrethem-keystore.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk avrethem-keystore

rm -f platforms/android/app/build/outputs/apk/release/app-signed.apk
zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk platforms/android/app/build/outputs/apk/release/app-signed.apk