import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResultCharacter } from '../../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

constructor(private http: HttpClient) {}

  public getSearchCharacters():Observable <IResultCharacter> {
    const path = environment.baseUrlAPI;
    //return this.http.get<ICharacter[]>(path);
    return this.http.get<IResultCharacter>(path);
  }

  // searchCharacters(query='', page = 1) {
  //   const filter = `${environment.baseUrlAPI}/?name=${query}&page=${page}`;
  //   return this.http.get<ICharacter[]>(filter);
  // }
  getDetails(id:number) {
    //return this.http.get<ICharacter>(`${environment.baseUrlAPI}/${id}`)
  }
}
