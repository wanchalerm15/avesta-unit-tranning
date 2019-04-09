import { Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ReadComponent } from './components/read/read.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';

export const AppRouting: Routes = [
    { path: 'create', component: CreateComponent },
    { path: 'read', component: ReadComponent },
    { path: 'update/:id', component: UpdateComponent },
    { path: 'delete/:id', component: DeleteComponent }
];