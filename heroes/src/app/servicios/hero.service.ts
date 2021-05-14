import { Injectable } from '@angular/core';
import { Hero } from '../models/Hero';
import { HEROES } from '../mocks/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }

  getHero(id: number):Hero {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id) as Hero;
   // this.messageService.add(`HeroService: fetched hero id=${id}`);
    return (hero);
  }
}
