import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaveAnimationComponent } from "./wave-animation/wave-animation.component";

@NgModule({
  declarations: [WaveAnimationComponent],
  exports: [WaveAnimationComponent],
  imports: [
    CommonModule
  ]
})
export class AnimationModule { }
