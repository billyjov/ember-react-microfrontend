import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandscapesComponent } from './landscapes/landscapes.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  }, {
    path: 'landscapes',
    component: LandscapesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
