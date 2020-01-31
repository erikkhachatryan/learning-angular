import {NgModule} from '@angular/core';
import {MatDynamicTreeComponent} from './mat-dynamic-tree.component';
import {MaterialModule} from '../../material/material.module';
import {DynamicDatabase} from './mat-dynamic-tree.model';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    MatDynamicTreeComponent,
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
    MatDynamicTreeComponent,
  ]
})
export class MatDynamicTreeModule { }
