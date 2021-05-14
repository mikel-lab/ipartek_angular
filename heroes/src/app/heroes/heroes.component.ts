import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/Hero';
import { HEROES } from '../mocks/mock-heroes';
import { HeroService } from '../servicios/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


// Ejercicio guía: https://angular.io/tutorial

  public heroes: Hero[] = [];
  public heroesService: HeroService;

  constructor( heroService: HeroService)
  {
    this.heroesService = heroService;

  }

  ngOnInit(): void {

    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroesService.getHeroes();
  }


}


