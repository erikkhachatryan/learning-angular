import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {DynamicDatabase} from './mat-dynamic-tree-test/tree-data';
import {MatDynamicTreeModule} from './mat-dynamic-tree-test/mat-dynamic-tree.module';
import {MatTreeModule} from './mat-tree-test/mat-tree.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTreeModule,
    MatDynamicTreeModule,
  ],
  providers: [
    DynamicDatabase,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
