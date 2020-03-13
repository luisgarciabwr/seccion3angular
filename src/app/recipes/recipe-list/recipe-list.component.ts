import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('a test recipe', 'a simply test',
      'https://t2.rg.ltmcdn.com/es/images/2/4/1/img_spaghetti_con_pollo_7142_orig.jpg'),
    new Recipe('a test recipe', 'a simply test',
      'https://t2.rg.ltmcdn.com/es/images/2/4/1/img_spaghetti_con_pollo_7142_orig.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
