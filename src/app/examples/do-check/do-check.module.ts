import {NgModule} from '@angular/core';
import {DoCheckParentComponent} from './do-check-parent/do-check-parent.component';
import {DoCheckChildComponent} from './do-check-child/do-check-child.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../../material/material.module';


@NgModule({
  declarations: [
    DoCheckParentComponent,
    DoCheckChildComponent
  ],
  exports: [
    DoCheckParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
  ]
})
export class DoCheckModule { }
