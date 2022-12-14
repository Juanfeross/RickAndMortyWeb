import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacter, IEpisode, ILocation, IPagination } from 'src/app/shared/interfaces/character.interface';
import { CharacterService } from 'src/app/shared/services/character-service/character.service.service';
import { SearchService } from 'src/app/shared/services/search-service/search.service.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public characters: ICharacter[] = [];
  public locations: ILocation[] = [];
  public pages!: IPagination;
  public pageNum = 1;
  public charactersDetails!: ICharacter;
  public locationDetail!: ILocation;



  constructor(private router: ActivatedRoute, private characterService: CharacterService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.getSearchCharacters();
    this.getFormSearch();
  }

  public buttonClick(isPlus?: boolean) {
    isPlus?this.pageNum++:this.pageNum--;

    if (this.pageNum > this.pages.pages) {
      this.pageNum = 1;
    }
    else if (this.pageNum < 1) {
      this.pageNum = this.pages.pages;
    }

    this.getSearchCharacters();
  }

  private getFormSearch() {
    this.searchService.OnSearch
    .subscribe(res => {
      this.getSearchCharacters(res);
    });
  }

  public getSearchCharacters(name?: string) {
    if (!this.pageNum) {
      this.pageNum = 1;
    }
    this.characterService.getSearchCharacters(this.pageNum, name)
    .subscribe(response => {
      this.characters = response.results;
      this.pages = response.info;
      this.getDetails(this.characters[0].id);
    })
  }

  public getDetails(id:number) {
    this.selectedItem(id);
    this.characterService.getDetails(id)
    .subscribe(resp => {
      this.charactersDetails = resp;
    })
  }

  public items() {
    const indexArray = this.charactersDetails.episode.map((item, index) => item);
    return indexArray;
  }

  public selectedItem(id:number) {
    this.characters.forEach(character => {
      character.isSelected = false;
      if (id === character.id) {
        character.isSelected = true;
      }
    });
  }
}


