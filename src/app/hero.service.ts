import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root' // registered the HeroService at the root level so that it can be injected anywhere in the app
})
export class HeroService {
  constructor(private messageService: MessageService) { } // used Angular Dependency Injection to inject it into another service

  // getHeroes() must have an asynchronous signature of some kind
  // 1. a callback or
  // 2. a promise or
  // 3. an observable
  getHeroes(): Observable<Hero[]> { // implemented as an observable
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
