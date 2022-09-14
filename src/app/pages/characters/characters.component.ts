import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacter } from 'src/app/shared/interfaces/character.interface';
import { CharacterService } from 'src/app/shared/services/character-service/character.service.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public characters: ICharacter[] = [];

  constructor(private router: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getSearchCharacters();
  }

  public getSearchCharacters() {
    this.characterService.getSearchCharacters()
    .subscribe(response => {
      console.log(response);
      this.characters = response.results;
    })
  }
}
