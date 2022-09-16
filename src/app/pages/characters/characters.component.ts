import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacter, IPagination } from 'src/app/shared/interfaces/character.interface';
import { CharacterService } from 'src/app/shared/services/character-service/character.service.service';
import { SearchService } from 'src/app/shared/services/search-service/search.service.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public characters: ICharacter[] = [];
  public pages!: IPagination;
  public pageNum = 1;

  constructor(private router: ActivatedRoute, private characterService: CharacterService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.getSearchCharacters();

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

  public changePage() {

  }

  private getSearchCharacters() {
    this.characterService.getSearchCharacters(this.pageNum)
    .subscribe(response => {
      console.log(response);
      this.characters = response.results;
      this.pages = response.info;
    })
  }
}
