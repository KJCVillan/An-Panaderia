import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetaDetallesComponent } from './components/receta-detalles/receta-detalles.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { HomeComponent } from './inicio/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'recetas', component: RecetasComponent},
  {path: 'productos', component: RecetaDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
