import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {bootstrapWorkerUi} from '@angular/platform-webworker'
import {platformWorkerAppDynamic} from '@angular/platform-webworker-dynamic'

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
// platformWorkerAppDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
