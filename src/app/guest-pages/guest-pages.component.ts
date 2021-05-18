import { Component, OnInit } from '@angular/core';
import { NbSpinnerService } from '@nebular/theme';

@Component({
    selector: 'ngx-guest-pages',
    styles: [''],
    template: `
    <nb-layout>
        <nb-layout-column>
            <router-outlet></router-outlet>
        </nb-layout-column>
    </nb-layout>
    `,
})

export class GuestPagesComponent {

    constructor(private spinnerService: NbSpinnerService) {
    }

}
