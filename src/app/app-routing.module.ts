import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaComponent } from './pages/pagina/pagina.component';


const routes: Routes = [
  { path: '', component: PaginaComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
