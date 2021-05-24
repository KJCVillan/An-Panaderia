import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
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
    RecetaDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
