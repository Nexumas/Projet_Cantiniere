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
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GestionPlatComponent } from './gestion-plat/gestion-plat.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MdpoublieComponent,
    NavbarComponent,
    IndexComponent,
    InscriptionComponent,
    PanierComponent,
    PagenotfoundComponent,
    GestionPlatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
