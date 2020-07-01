import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { SourceComponent } from './products/source.component';
import { Routes, RouterModule } from '@angular/router';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
  {path: 'products', component: SourceComponent},
  {path: 'user', component: UserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SourceComponent,
    JwPaginationComponent,
    UserComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
