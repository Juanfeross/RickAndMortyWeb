import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICharacter, ILocation, IResultCharacter } from '../../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

constructor(private http: HttpClient) {}

  public getSearchCharacters(pageNum = 1, name: string=''):Observable <IResultCharacter> {
    const path = environment.baseUrlAPI + '/character' + '?page=' + pageNum + '&name=' + name;
    return this.http.get<IResultCharacter>(path);
  }

  public getDetails(id:number):Observable <ICharacter> {
    return this.http.get<ICharacter>(environment.baseUrlAPI + '/character' + '/' + id)
  }
}


