import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {MatDynamicTreeTestComponent} from './mat-dynamic-tree-test.component';
import {MaterialModule} from '../material/material.module';
import {DynamicDatabase} from './tree-data';


@NgModule({
  declarations: [
    MatDynamicTreeTestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [
    DynamicDatabase,
  ],
  exports: [
    MatDynamicTreeTestComponent,
  ]
})
export class MatDynamicTreeModule { }
