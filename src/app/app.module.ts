
import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

import { Oops } from './oops.service';
import { API } from './api.service';

import { AppComponent } from './app.component';
import { DropDownComponent } from './dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    DropDownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    DropdownModule
  ],
  providers: [
    Oops,
    API
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
