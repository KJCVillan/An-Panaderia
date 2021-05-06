import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor(private http: HttpClient) { }

  recetasSelect()
  {
    const ruta = "https://servicios.campus.pe/servicioempleados.php";
    return this.http.get(ruta);

    // const ruta = "https://api.spoonacular.com/recipes/findByNutrients?apiKey=9a33a94eb7c3431a82d91212df2a5fd3&minCarbs=10&maxCarbs=50&number=10";
    // return this.http.get(ruta);
  }
}
