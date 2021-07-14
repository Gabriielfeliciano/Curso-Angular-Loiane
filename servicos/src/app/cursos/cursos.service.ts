import { LogService } from './../shared/log.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Angular','JS','HTML'];

  constructor(private logService: LogService) {
    console.log("chamada");
    
   }

  getCursos(){
    this.logService.consoleLog('Obtendo uma lista de cursos')
    return this.cursos;
  }

  addCurso(curso: string){
    this.logService.consoleLog(`Curso adicionado ${curso}`)
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
