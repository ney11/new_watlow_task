import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";

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
    selector: 'app-ingredient-page',
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
    templateUrl: './ingredient-page.component.html',
    styleUrls: ['./ingredient-page.component.scss'],
})

export class IngredientPageComponent implements OnInit {
    drinkId: string | null = null;
    drinkDetails: any;
    isLoading: boolean = true;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.drinkId = this.route.snapshot.paramMap.get('idDrink');

        /** Read other details from queryParams */
        this.route.queryParams.subscribe(params => {
            if (params["data"]) {
                /** Convert string back to object. */
                this.drinkDetails = this.transformDrink(JSON.parse(params["data"]));
                this.isLoading = false;
            }
            console.log('drinkDetails', this.drinkDetails)
        });
    }

    /** Transform the ingrident and messurement as a array. */
    transformDrink(drink: any) {
        const ingredients = [];

        for (let i = 1; i <= 15; i++) {
            const ingredient = drink[`strIngredient${i}`];
            const measure = drink[`strMeasure${i}`];

            if (ingredient) {
                ingredients.push({
                    name: ingredient,
                    measure: measure ? measure.trim() : "NA"
                });
            }
        }

        /** Return a new object with all drink details + merged ingredients */
        return {
            ...drink,
            ingredients
        };
    }
}