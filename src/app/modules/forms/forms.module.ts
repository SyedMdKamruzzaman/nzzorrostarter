import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';


@NgModule({
  declarations: [
    FormsComponent,
    BasicFormComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
