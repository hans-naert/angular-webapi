import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), provideHttpClient(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"fir-project-les","appId":"1:726149397158:web:11fd8ab20a841fe77a9267","storageBucket":"fir-project-les.appspot.com","apiKey":"AIzaSyA9zeI_nv8GUxKuTTMzL_crJD1ujQ-umP0","authDomain":"fir-project-les.firebaseapp.com","messagingSenderId":"726149397158","measurementId":"G-D2CZ16GV39"}))), importProvidersFrom(provideAuth(() => getAuth()))],
};
