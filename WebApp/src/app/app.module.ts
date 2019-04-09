import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReadComponent } from './components/read/read.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './components/create/create.component';
import { LayoutComponent } from './layout/layout.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    LayoutComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRouting)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
