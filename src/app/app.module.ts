import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewComponent } from './add-new/add-new.component';
import { AccountService } from './Account.service';

@NgModule({
  declarations: [
    AppComponent,
    AddNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
