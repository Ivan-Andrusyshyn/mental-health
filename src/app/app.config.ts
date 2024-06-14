import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { AngularFireModule } from '@angular/fire/compat';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      AngularFireModule.initializeApp(environment.firebaseConfig),
    ]),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),

    provideClientHydration(),
    provideHttpClient(),
    provideAnimationsAsync(),
  ],
};
