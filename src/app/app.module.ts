import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';

import { HotelsService } from './services/hotels.service';

const Routes = [
  {
    path: '',
    redirectTo: 'hotels',
    pathMatch: 'full'
  },
  {
    path: 'hotels',
    component: HotelsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [
    HotelsService,
    HotelsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
