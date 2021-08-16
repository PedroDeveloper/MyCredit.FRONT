import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryComponent } from './pages/query/query.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
 { path: '', component: QueryComponent },
 { path: 'create', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
