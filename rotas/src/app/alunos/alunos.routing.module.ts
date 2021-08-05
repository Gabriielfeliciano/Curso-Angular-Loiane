import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';

const alunosRoutes: Routes = [
    {path: 'alunos', component: AlunosComponent},
    {path: 'alunos/novo', component: AlunoFormComponent},
    {path: 'alunos/:id', component: AlunoDetalhesComponent},
    {path: 'alunos/:id/editar', component: AlunoFormComponent}
    
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {}