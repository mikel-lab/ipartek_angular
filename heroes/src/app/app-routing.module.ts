import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NuevoHeroeComponent } from './nuevo-heroe/nuevo-heroe.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes =[

  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'hero', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'nuevo', component: NuevoHeroeComponent},
  {path: '', redirectTo: 'dashboard',pathMatch: 'full'},
  {path: '**', redirectTo: 'dashboard'},
]

@NgModule({

  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
