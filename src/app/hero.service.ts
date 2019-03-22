import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // getHeroes() must have an asynchronous signature of some kind
  // 1. a callback or
  // 2. a promise or
  // 3. an observable
  getHeroes(): Observable<Hero[]> { // implemented as an observable
    return of(HEROES);
  }
}
