import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/Hero';
import { HeroService } from '../servicios/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public heroesService: HeroService;
  public heroes: Hero[] = [];

  constructor(heroService: HeroService) {
    this.heroesService = heroService;
   }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroesService.getHeroes().slice(1, 5);

  }

}
