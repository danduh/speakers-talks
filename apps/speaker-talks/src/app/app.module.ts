import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MainModule} from "./main/main.module";
import {AuthModule} from "./auth/auth.module";
import {AuthComponent} from "./auth/auth.component";
import {SharedModule} from "./shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AuthComponent,
    AppComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AuthModule,
    MainModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
