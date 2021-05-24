import { Component, OnInit } from '@angular/core';
import { Recetas } from 'src/app/entities/recetas';
import { RecetasService } from 'src/app/services/recetas.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  listaRecetas: Recetas [];
  constructor(private recetaService: RecetasService ) { }

  ngOnInit(): void {
    this.recetaService.recetasSelect().subscribe(
      (res: Recetas[])=> {
        this.listaRecetas=res;
        console.log(res);
      }
    )
  }
}
