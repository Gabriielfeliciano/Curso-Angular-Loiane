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
      email: [null, [Validators.required, Validators.email]]
    });
  }

  onSubmit(){
    console.log(this.formulario);

    this.http.post('https://httpbin.org/post', JSON.stringify(  this.formulario.value)).subscribe(dados => {
      console.log(dados);
      // this.resetar()
    },
    (error : any) => alert('erro'));
    
  }
  
  resetar(){
    this.formulario.reset();
  }
  
  verificaValidTouched(campo:any){

    return !this.formulario.controls[campo].valid && this.formulario.controls[campo].touched
     
  }

  verficaEmailInvalido(){
    let campoEmail = this.formulario.controls['email'];
    if(campoEmail?.errors){
      return campoEmail.errors['email'] && campoEmail.touched
    }
  }

  aplicaCssErro(campo:any){
    return {
      'is-invalid' : this.verificaValidTouched(campo)
    }
  }
}
