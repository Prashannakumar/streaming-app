import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPageComponent } from './video-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [VideoPageComponent],
  imports: [RouterModule.forChild([{ path: '', component: VideoPageComponent }]),CommonModule],
})
export class VideoPageModule {}
