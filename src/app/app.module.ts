import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PushNotificationsService } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { DsService } from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DsService, PushNotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
