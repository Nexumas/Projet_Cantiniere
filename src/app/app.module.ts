<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {MdpoublieComponent} from './mdpoublie/mdpoublie.component';
import {NavbarComponent} from './navbar/navbar.component';
import {IndexComponent} from './index/index.component';
import {InscriptionComponent} from './inscription/inscription.component';
import { PanierComponent } from './panier/panier.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MdpoublieComponent,
    NavbarComponent,
    IndexComponent,
    InscriptionComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
=======
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import {PanierComponent} from "./panier/panier.component";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
>>>>>>> feature-panier
