import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { AngularFireModule } from '@angular/fire/compat';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { bearerTokenInterceptor } from './interceptors.bearer-token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireModule,
    ]),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),

    provideClientHydration(),
    provideHttpClient(withInterceptors([bearerTokenInterceptor])),
    provideAnimationsAsync(),
  ],
};
