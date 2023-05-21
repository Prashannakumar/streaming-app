import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

// css modules

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    CommonModule,
    NgbCarouselModule,
    NgIf,
  ],
  exports: [NgbCarouselModule, NgIf],
})
export class HomeModule {}
