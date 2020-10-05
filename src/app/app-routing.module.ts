import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'currency',
    loadChildren: () => import('./currency/currency.module').then(m => m.CurrencyModule),
  },
  { path: '**', redirectTo: '/currency/date', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
