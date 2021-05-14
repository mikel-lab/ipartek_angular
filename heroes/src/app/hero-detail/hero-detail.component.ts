import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../models/Hero';
import { HEROES } from '../mocks/mock-heroes';
import { Location } from '@angular/common';
import { HeroService } from '../servicios/hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero;  //No es necesario elimput. Sólo cuando este componente se incrustaba en el
  //html del padre "herocomponent" metiendole el selector de este componente y pasandole los valores del
  //heroes mediante propiedas en el selector de este componente insertado en heroecomponent.
  //Ahora simplemente recoge un ID x parametro para identificar el héroe pulsado, sin necesidad de
  //pasarse la info del padre al hijo.
    private route: ActivatedRoute;

//Podemos inyectar dependencias en el constructor sin declarar una variable
//fuera del mismo poniendo una visibilidad a dicha dependencia, tal y como se ve en el 2 y 3
//parametro. A diferencia de como lo hago en heroesComponent con el heroservice.
  constructor(route: ActivatedRoute,private heroService: HeroService, private location: Location
  ) {
    this.route = route;

    //Extraemos el valor ID de la ruta para poder guardarlo en una variable
    //y compararlo para identificar el heroe concreto


    }


  ngOnInit(): void {
    this.getHero();
  }

  getHero():void {

    let idHero: number= Number.parseInt(this.route.snapshot.paramMap.get('id'));
    console.log("El parámetro recuperado es: " + idHero);
    for(let i: number = 0; i < HEROES.length; i++  ){
      if (HEROES[i].id==idHero){
        this.hero= HEROES[i];
      }
   }
  }

  goBack(): void {
    this.location.back();
  }

}
