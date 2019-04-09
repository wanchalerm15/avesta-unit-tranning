import { NgModule, NgModuleFactoryLoader } from "@angular/core";
import { LayoutComponent } from '../layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule, SpyNgModuleFactoryLoader } from '@angular/router/testing';
import { AppRouting } from '../app.routing';
import { CreateComponent } from '../components/create/create.component';
import { ReadComponent } from '../components/read/read.component';
import { UpdateComponent } from '../components/update/update.component';
import { DeleteComponent } from '../components/delete/delete.component';
import { LocationStrategy } from '@angular/common';

export class TestingModule {
    static forModule(params: NgModule): NgModule {
        return {
            declarations: [
                LayoutComponent,
                CreateComponent,
                ReadComponent,
                UpdateComponent,
                DeleteComponent,
                ...params.declarations || []
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
                RouterTestingModule.withRoutes(AppRouting),
                ...params.imports || []
            ],
            providers: [
                ...params.providers || []
            ]
        };
    }
}