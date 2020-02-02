import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {WebWorkerComponent} from './web-worker.component';
import {MaterialModule} from "../../material/material.module";
import {WorkerAppModule} from "@angular/platform-webworker";


@NgModule({
  declarations: [
    WebWorkerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [],
  exports: [
    WebWorkerComponent,
  ]
})
export class WebWorkerModule {
}
