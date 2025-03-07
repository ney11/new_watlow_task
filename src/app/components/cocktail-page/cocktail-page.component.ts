import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";

import { HomeService } from "../../services/home.service";

import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from "@angular/material/radio";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
    selector: 'app-cocktail-page',
    standalone: true,
    imports: [
        CommonModule,

        RouterModule,

        MatCardModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatRadioModule,
        MatTooltipModule,
        MatIconModule,
        MatProgressSpinnerModule
    ],
    templateUrl: './cocktail-page.component.html',
    styleUrls: ['./cocktail-page.component.scss'],
})

export class CocktailPageComponent implements OnInit {
    drinkType: string | null = null;
    drinks: any[] = [];
    filterDrinks: any[] = [];
    filterModes: any[] = ['Alcoholic', 'Non-Alcoholic'];
    isExpanded: { [key: string]: boolean } = {};
    isLoading: boolean = true;

    constructor(private route: ActivatedRoute, private homeService: HomeService) { }

    ngOnInit(): void {
        this.drinkType = this.route.snapshot.paramMap.get('type');
        console.log('Drink ID:', this.drinkType);
        if (this.drinkType) {
            this.fetchDrinks(this.drinkType)
        }
    }

    fetchDrinks(searchTerm: any): void {
        this.homeService.getDrink(searchTerm).subscribe({
            next: (response) => {
                this.drinks = response.drinks || [];
                this.filterDrinks = [...this.drinks];
                this.isLoading = false;
            },
            error: (err) => {
                console.error(err.message);
                alert(err.message); // User-friendly error message
            }
        });
    }

    /** Filter as alcholic or non-alcholic. */
    onFilter(value: any) {
        console.log(value)
        if (value) {
            this.filterDrinks = this.drinks.filter(item => item.strAlcoholic == value)
        }
    }
}