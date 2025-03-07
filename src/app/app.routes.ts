import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home/home.component').then(x => x.HomeComponent)
    },
    {
        path: 'cocktail/:type',
        loadComponent: () => import('./components/cocktail-page/cocktail-page.component').then(m => m.CocktailPageComponent)
    },
    {
        path: 'ingredient/:idDrink',
        loadComponent: () => import('./components/ingredient-page/ingredient-page.component').then(m => m.IngredientPageComponent)
    }
];
