import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';

const routes: Routes = [
  {
    path:'',
    component:FormsComponent,
    children:[
      {
        path:'basic',
        component:BasicFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
