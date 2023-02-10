import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Routes,RouterModule } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

const app_routes: Routes = [
    { path: 'home', component: PortfolioComponent},
    { path: 'about', component: AboutComponent},
    { path: 'item', component: ItemComponent },
    {path: '**',pathMatch:'full', redirectTo:'home' }


];

@NgModule({
    declarations: [],
    imports: [ RouterModule.forRoot(app_routes, { useHash: true }) ],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule {}
export class FeatureModule {}
export class AppRouting {

}


