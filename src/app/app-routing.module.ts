import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './components/summary/summary.component';
import { OutcomesComponent } from './components/outcomes/outcomes.component';
import { IncomesComponent } from './components/incomes/incomes.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {
    path: '',pathMatch: 'full', redirectTo: 'resumen'
  },
  {
    path: 'resumen',
    component: SummaryComponent
  },
  {
    path: 'gastos',
    component: OutcomesComponent
  },
  {
    path: 'ahorros',
    component: IncomesComponent
  },
  {
    path: 'perfil',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
