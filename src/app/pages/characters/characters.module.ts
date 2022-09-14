import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CharactersRoutingModule
  ],
  exports: [
    CharactersComponent
  ]
})
export class CharactersModule { }
