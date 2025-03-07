import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from "@angular/router";


@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        RouterModule,

        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatSidenavModule,
        MatListModule
    ],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
    constructor() { }
    ngOnInit(): void {

    }
}