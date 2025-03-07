import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

import { HomeService } from "../../services/home.service";

import { MatCardModule } from '@angular/material/card';
import { RouterModule } from "@angular/router";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,

        RouterModule,

        MatCardModule
    ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
    drinkTypes: any[] = ['Mojito', 'Margarita']
    drinks: any[] = [];

    constructor(private homeService: HomeService) { }
    ngOnInit(): void {

    }
}