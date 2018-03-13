import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { ShopComponent } from './shop/shop.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'new-arrival', component: NewArrivalsComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'shop', component: ShopComponent },
    { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
