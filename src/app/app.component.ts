import { Component } from '@angular/core';
import {Hero } from './hero';
import { Website } from './website';
import { MouseComponent } from './mouse-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [
    '.box {width:300px; height:200px; border: 1px solid LightGray; padding: 10px;background-color: rgba(255, 0, 0, 0.3);}',
    '.type {font-size: 30px;}',    
] 


})
export class AppComponent {
  title: string;
  myHero: Hero;
  isHidden : boolean;
  textContent : string;
  heroes: Array<Hero>;
  website : Website;
  mousecomponent :MouseComponent;

  constructor() {
    this.heroes = [ new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')];

    this.title = 'Tour of Heroes';

    this.myHero = this.heroes[2];

    this.isHidden = false;

    this.textContent = "microsoft.com"

    this.website= new Website(1,"microsoft.com","http://www.microsoft.com");

    this.mousecomponent = new MouseComponent();

  }
}
