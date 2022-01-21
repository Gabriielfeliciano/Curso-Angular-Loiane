import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { catchError, empty, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  //cursos: Curso[] = [];
  cursos$: Observable<Curso[]> | undefined;
  error$ = new Subject<boolean>();
  
  constructor(private serviceCurso : CursosService) { }

  ngOnInit(): void {
    //this.serviceCurso.list().subscribe(dados => this.cursos = dados)
    this.onRefresh();
  }

  onRefresh(){
    this.cursos$ = this.serviceCurso.list()
    .pipe(
      catchError(error => {
        console.log(error); 
        this.error$.next(true);
        return empty();        
      })
    );
  }

}
