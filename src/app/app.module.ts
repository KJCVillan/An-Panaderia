import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { HomeComponent } from './inicio/home/home.component';
import { PastelesComponent } from './inicio/pasteles/pasteles.component';
import { PanComponent } from './inicio/pan/pan.component';
import { UbicarComponent } from './inicio/ubicar/ubicar.component';
import { MainBodyComponent } from './common/main-body/main-body.component';
import { FrontComponent } from './inicio/front/front.component';
import { RecetaDetallesComponent } from './components/receta-detalles/receta-detalles.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';
import { EscritorioComponent } from './components/escritorio/escritorio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainFooterComponent,
    RecetasComponent,
    HomeComponent,
    PastelesComponent,
    PanComponent,
    UbicarComponent,
    MainBodyComponent,
    FrontComponent,
    RecetaDetallesComponent,
    LoginComponent,
    EscritorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FilterPipeModule,
    OrderModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
