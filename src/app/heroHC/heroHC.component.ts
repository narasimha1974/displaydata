import { Component, OnInit } from '@angular/core';
import {Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './heroHC.component.html',
  styleUrls: ['./heroHC.component.css']
})
export class HeroComponent implements OnInit {
  
  public id: number;
  public name: string;

  constructor( x :Hero) { 
    this.id = x.id;
    this.name = x.name;
  }

  ngOnInit() {
  }

}
