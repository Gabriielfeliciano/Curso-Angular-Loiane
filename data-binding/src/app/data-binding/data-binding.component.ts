import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  title = "Hello Word!"
  image = 'https://io2.convertiez.com.br/m/doceefesta/shop/products/images/8652/medium/aranha-halloween-ref-kriat-un_8519.jpg';

  nomeDoCurso = "Angular";
  valorInicial = 15;
  
  getValor(){
    return 1 + 1;
  }

  valorAtual = "";
  valorSalvo = "";
  isMouseOver = false;

  nome = "abc";

  pessoa = {
    nome : "nome aqui",
    idade : 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  botaoClicado(){
    alert('Botão foi clicado!')
  }

  onKey(evento: KeyboardEvent){
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }

  salvarValor(valor:string){
    this.valorSalvo = valor
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver
  }

  onMudouValor(evento:any){
    console.log(evento);
    
  }

}
