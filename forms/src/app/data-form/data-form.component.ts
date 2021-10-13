import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    // this.formulario = new FormGroup({
    //   nome: new FormControl('Gabriel'),
    //   email: new FormControl(null),
    // });

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],

      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null,Validators.required],
        complemento: [null],
        rua: [null,Validators.required],
        bairro: [null,Validators.required],
        cidade: [null,Validators.required],
        estado: [null,Validators.required]
      })
    });
  }

  onSubmit(){
    this.http.post('https://httpbin.org/post', JSON.stringify(  this.formulario.value)).subscribe(dados => {
      console.log(dados);
      // this.resetar()
    },
    (error : any) => alert('erro'));
    
  }
  
  resetar(){
    this.formulario.reset();
  }
  
  verificaValidTouched(campo:string){

    return !this.formulario.controls[campo].valid && this.formulario.controls[campo].touched
     
  }

  verficaEmailInvalido(){
    let campoEmail = this.formulario.controls['email'];
    if(campoEmail?.errors){
      return campoEmail.errors['email'] && campoEmail.touched
    }
  }

  aplicaCssErro(campo:string){
    return {
      'is-invalid' : this.verificaValidTouched(campo)
    }
  }

  // consultaCEP(cep: string, form:any) {
  //   // Nova variável "cep" somente com dígitos.
  //   cep = cep.replace(/\D/g, '');
  //   this.resetaDadosForm(form)
  //   // Verifica se campo cep possui valor informado.
  //   if (cep !== '') {
  //     // Expressão regular para validar o CEP.
  //     const validacep = /^[0-9]{8}$/;

  //     // Valida o formato do CEP.
  //     if (validacep.test(cep)) {
  //       this.http.get(`//viacep.com.br/ws/${cep}/json`).subscribe(dados => this.populaDadosForm(dados,form));
  //     }
  //   }
  // }

  // populaDadosForm(dados:any, formulario:any){
  //   formulario.form.patchValue({
  //     endereco: {
  //       rua: dados.logradouro,
  //       // cep: dados.cep,
  //       //complemento: dados.complemento,
  //       bairro: dados.bairro,
  //       cidade: dados.localidade,
  //       estado: dados.uf
  //     }
  //   });
  // }

  // resetaDadosForm(formulario:any) {
  //   formulario.form.patchValue({
  //     endereco: {
  //       rua: null,
  //       //complemento: null,
  //       bairro: null,
  //       cidade: null,
  //       estado: null
  //     }
  //   });
  // }
}
