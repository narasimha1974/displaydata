import { Component } from '@angular/core';
import {Hero } from './hero';
import { Website } from './website';
import { MouseComponent } from './mouse-component';
import { HeroComponent } from './heroHC/heroHC.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
})
export class AppComponent {
  title: string;
  myHero: Hero;
  isHidden : boolean;
  isUnchanged : boolean;
  textContent : string;
  heroes: Array<Hero>;
  website : Website;
  mousecomponent :MouseComponent;
  heroHC:HeroComponent;
  classes:string;

  constructor() {
    this.heroes = [ new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')];

    this.title = 'Tour of Heroes';

    this.myHero = this.heroes[2];

    this.isHidden = false;

    this.textContent = "microsoft.com"

    this.website= new Website(1,"microsoft.com","http://www.microsoft.com","https://c.ndtvimg.com/2018-11/nl5fbol_uddhav-thackeray-in-ayodhya_november-25-_120x90_25_November_18.jpg");

    this.mousecomponent = new MouseComponent();

    this.heroHC = new HeroComponent(this.myHero);

    this.isUnchanged = false;

    this.classes = 'buttonStates';

  }
}
