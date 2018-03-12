import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TempReferenceVariableComponent } from './temp-reference-variable/temp-reference-variable.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { StyleDirectiveComponent } from './style-directive/style-directive.component';
import { NgifNgforComponent } from './ngif-ngfor/ngif-ngfor.component';
import { WordsComponent } from './words/words.component';
import { AddNgforComponent } from './add-ngfor/add-ngfor.component';


@NgModule({
  declarations: [
    AppComponent,
    TempReferenceVariableComponent,
    StyleBindingComponent,
    StyleDirectiveComponent,
    NgifNgforComponent,
    WordsComponent,
    AddNgforComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
