import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {MatDynamicTreeModule} from './examples/mat-dynamic-tree/mat-dynamic-tree.module';
import {MatTreeModule} from './examples/mat-tree/mat-tree.module';
import {WebWorkerModule} from './examples/web-worker/web-worker.module';
import {WorkerAppModule} from '@angular/platform-webworker';
import {InlineWorkerModule} from "./examples/inline-worker/inline-worker.module";
import {DoCheckModule} from './examples/do-check/do-check.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTreeModule,
    MatDynamicTreeModule,
    WebWorkerModule,
    InlineWorkerModule,
    DoCheckModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
