import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  cursos: Curso[] = [];
  
  constructor(private serviceCurso : CursosService) { }

  ngOnInit(): void {
    this.serviceCurso.list().subscribe(dados => this.cursos = dados);

  }

}
