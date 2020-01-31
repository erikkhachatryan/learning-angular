import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {WebWorkerComponent} from './web-worker.component';


@NgModule({
  declarations: [
    WebWorkerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
  ],
  exports: [
    WebWorkerComponent,
  ]
})
export class WebWorkerModule { }
