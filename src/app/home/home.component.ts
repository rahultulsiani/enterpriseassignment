import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isCollapsed = true;
  itemsPerSlide = 4; 
  slides = [
    {image: 'assets/images/product-1.png'},
    {image: 'assets/images/product-2.png'},
    {image: 'assets/images/pets.png'},
    {image: 'assets/images/bird-house.png'},
    {image: 'assets/images/buitenkaars-berk.png'},
    {image: 'assets/images/buitenkaars.png'},
    {image: 'assets/images/product-1.png'},
    {image: 'assets/images/product-2.png'}
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
