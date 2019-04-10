import { NgModule } from '@angular/compiler/src/core';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutComponent } from '../layout/layout.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export function TestingModule(params: NgModule): NgModule {
    return {
        declarations: [
            LayoutComponent,
            ...params.declarations || []
        ],
        imports: [
            RouterTestingModule.withRoutes([
                { path: 'create', component: LayoutComponent },
                { path: 'read', component: LayoutComponent },
                { path: 'update/:id', component: LayoutComponent },
                { path: 'delete/:id', component: LayoutComponent }
            ]),
            HttpClientTestingModule,
            FormsModule,
            ReactiveFormsModule
        ],
        providers: [
            ...params.providers || []
        ]
    };
}

