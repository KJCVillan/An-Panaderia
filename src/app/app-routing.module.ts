import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscritorioComponent } from './components/escritorio/escritorio.component';
import { LoginComponent } from './components/login/login.component';
import { RecetaDetallesComponent } from './components/receta-detalles/receta-detalles.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { HomeComponent } from './inicio/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'recetas', component: RecetasComponent},
  {path: 'productos', component: RecetaDetallesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'escritorio', component: EscritorioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
