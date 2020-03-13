import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingedient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredents: Ingredient[] = [
    new Ingredient('Apples', 7),
    new Ingredient('Tomatoes', 8),
    new Ingredient('Eggs', 12)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
