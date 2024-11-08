import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RestaurantMenuComponent } from './pages/restaurant-menu/restaurant-menu.component';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path:'home', component:HomeComponent},
    {path:'restaurant-menu', component:RestaurantMenuComponent},
    {path: 'search', component: SearchComponent},
];
