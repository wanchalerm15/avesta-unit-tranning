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
            RouterTestingModule,
            HttpClientTestingModule,
            FormsModule,
            ReactiveFormsModule
        ]
    };
}

