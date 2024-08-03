import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const heroes = [
      { id : 11 , name : 'owen'},
      { id : 12 , name : 'vanessa'},
      { id : 13 , name : 'kelly'},
      { id : 14 , name : 'paul'},
      { id : 15 , name : 'eden'},
      { id : 16 , name : 'mia'},
      { id : 17 , name : 'john'},
      { id : 18 , name : 'potter'},
      { id : 19 , name : 'wilson'},
    ];
    return {heroes};
  }

  getId(heroes:Hero[]):number{
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id))+1:11;
  }

  constructor() { }
}
