import {NgModule} from '@angular/core';
import {MaterialModule} from '../../material/material.module';
import {MatTreeComponent} from './mat-tree.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    MatTreeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [
  ],
  exports: [
    MatTreeComponent,
  ]
})
export class MatTreeModule { }
