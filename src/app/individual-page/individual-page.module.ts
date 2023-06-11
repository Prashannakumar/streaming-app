import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndividualPageComponent } from './individual-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    IndividualPageComponent
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: IndividualPageComponent }]),
    CommonModule
  ]
})
export class IndividualPageModule { }
