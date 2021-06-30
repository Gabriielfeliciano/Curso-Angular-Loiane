import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ["Angular"];

  mostrarCursos = true;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarCurso(){
    this.mostrarCursos = !this.mostrarCursos;
  }

}
