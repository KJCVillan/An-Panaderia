import { Component, OnInit } from '@angular/core';
import { Detalle } from 'src/app/entities/ingredientes';
import { DETALLES } from 'src/app/entities/ingredientesdatos';

@Component({
  selector: 'app-receta-detalles',
  templateUrl: './receta-detalles.component.html',
  styleUrls: ['./receta-detalles.component.css']
})
export class RecetaDetallesComponent implements OnInit {

  frase ="Conoce el valor nutricional de nuestras recetas";
  detallesreceta= DETALLES;
  valorElegido: Detalle;

  constructor() { }

  ngOnInit(): void {}

  seleccionar(valorSeleccionado: Detalle)
  {
    console.log(valorSeleccionado);
    this.valorElegido = valorSeleccionado;
  }

  
}
