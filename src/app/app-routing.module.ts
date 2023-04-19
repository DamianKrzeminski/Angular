import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ItOffersComponent } from './components/it-offers/it-offers.component';
import { EngineerOffersComponent } from './components/engineer-offers/engineer-offers.component';
import { ManagementOffersComponent } from './components/management-offers/management-offers.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'itOffers',component:ItOffersComponent},
  {path:'engineerOffers',component:EngineerOffersComponent},
  {path:'managementOffers',component:ManagementOffersComponent},
  {path:'form',component:FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
