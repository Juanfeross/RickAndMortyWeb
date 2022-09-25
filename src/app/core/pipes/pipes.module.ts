import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesPipe } from './episodes/episodes.pipe';



@NgModule({
  declarations: [
    EpisodesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EpisodesPipe
  ]
})
export class PipesModule { }
