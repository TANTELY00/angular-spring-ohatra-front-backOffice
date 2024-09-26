import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceComponent } from './service/service.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ProduitComponent } from './produit/produit.component';
import { ClientComponent } from './client/client.component';
import { CommandeComponent } from './commande/commande.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"service" ,component:ServiceComponent},
  {path:"categorie",component:CategorieComponent},
  {path:"client" ,component:ClientComponent},
  {path:"produit" ,component:ProduitComponent},
  {path:"commande" ,component:CommandeComponent},
  {path:"profile" ,component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
