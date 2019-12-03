// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:3333',
  firebaseConfig: {
    apiKey: 'AIzaSyC561a0Vz_z8FDGoWFIvmAKXlFia58hXmQ',
    authDomain: 'speakers-talks.firebaseapp.com',
    databaseURL: 'https://speakers-talks.firebaseio.com',
    projectId: 'speakers-talks',
    storageBucket: 'speakers-talks.appspot.com',
    messagingSenderId: '733313811125',
    appId: '1:733313811125:web:139eefb71fd853c5bff4fc',
    measurementId: 'G-55HQHJK170'
  },
  AUTH_KEY: { token: 'jwt-token', exp: 'jwt-exp' }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
