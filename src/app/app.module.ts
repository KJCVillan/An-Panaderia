import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    MainBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
