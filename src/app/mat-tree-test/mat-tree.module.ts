import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {MatTreeTestComponent} from './mat-tree-test.component';
import {DynamicDatabase} from '../mat-dynamic-tree-test/tree-data';


@NgModule({
  declarations: [
    MatTreeTestComponent,
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
    MatTreeTestComponent,
  ]
})
export class MatTreeModule { }
