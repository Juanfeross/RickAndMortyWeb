import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/core/pipes/pipes.module';


@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CharactersRoutingModule,
    FormsModule,
    PipesModule
  ],
  exports: [
    CharactersComponent
  ]
})
export class CharactersModule { }
