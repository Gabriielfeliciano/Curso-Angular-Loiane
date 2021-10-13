import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario : any = {
    nome: null,
    email: null
  }
 
  onSubmit(form: any){
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value)).subscribe(dados => {
    })
    
  }

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

  }

  verificaValidTouched(campo:any){
    return !campo.valid && campo.touched
  }

  aplicaCssErro(campo:any){
    return {
      'was-validated' : this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep: string, form:any) {
    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');
    this.resetaDadosForm(form)
    // Verifica se campo cep possui valor informado.
    if (cep !== '') {
      // Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;

      // Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.http.get(`//viacep.com.br/ws/${cep}/json`).subscribe(dados => this.populaDadosForm(dados,form));
      }
    }
  }

  populaDadosForm(dados:any, formulario:any){
    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        // cep: dados.cep,
        //complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaDadosForm(formulario:any) {
    formulario.form.patchValue({
      endereco: {
        rua: null,
        //complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }
}
