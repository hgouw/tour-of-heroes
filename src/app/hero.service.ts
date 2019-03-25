import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root' // registered the HeroService at the root level so that it can be injected anywhere in the app
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api

  // used Angular Dependency Injection to inject it into another service
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  // getHeroes() must have an asynchronous signature of some kind
  // 1. a callback or
  // 2. a promise or
  // 3. an observable
  getHeroes(): Observable<Hero[]> { // implemented as an observable
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    // return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  // Log a HeroService message with the MessageService
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
