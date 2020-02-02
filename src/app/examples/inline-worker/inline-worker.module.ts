import {NgModule} from '@angular/core';
import {InlineWorkerComponent} from "./inline-worker.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    InlineWorkerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports:  [
    InlineWorkerComponent,
  ]
})
export class InlineWorkerModule { }
