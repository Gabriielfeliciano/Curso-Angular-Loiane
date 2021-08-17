import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { IFormCanDeactivate } from './Iform-deactivate';

@Injectable({
  providedIn: 'root'
})
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
                
  canDeactivate(
      component: AlunoFormComponent,
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {

      console.log('guarda de desativação');

      // return component.podeMudarRota ? component.podeMudarRota() : true;

      return component.podeDesativar ? component.podeDesativar() : true;
}
}
