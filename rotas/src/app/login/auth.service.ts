import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAutenticado = false;

  mostrarMenuEmitter = new EventEmitter<boolean>()

  constructor(private router: Router ) { }

  fazerLogin(usuario : Usuario){
    if(usuario.nome === 'usuario@gmail.com' && usuario.senha === '123456'){

      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);

    }else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);

    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
