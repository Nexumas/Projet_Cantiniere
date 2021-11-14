import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import {MdpoublieComponent} from './public/mdpoublie/mdpoublie.component';
import {NavbarComponent} from './core/navbar/navbar.component';
import {IndexComponent} from './public/index/index.component';
import {InscriptionComponent} from './public/inscription/inscription.component';
import { PanierComponent } from './public/panier/panier.component';
import { PagenotfoundComponent } from './core/pagenotfound/pagenotfound.component';
import { GestionPlatComponent } from './private/admin/gestion-plat/gestion-plat.component';
import { CarteUserComponent } from './public/carte-user/carte-user.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";


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
    GestionPlatComponent,
    CarteUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
