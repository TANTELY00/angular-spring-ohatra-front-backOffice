import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceComponent } from './service/service.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ClientComponent } from './client/client.component';
import { ProfileComponent } from './profile/profile.component';
import { CommandeComponent } from './commande/commande.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { LivreurComponent } from './livreur/livreur.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"service" ,component:ServiceComponent},
  {path:"categorie",component:CategorieComponent},
  {path:"commande",component:CommandeComponent},
  {path:"livraison",component:LivraisonComponent},
  {path:"livreur",component:LivreurComponent},
  {path:"client" ,component:ClientComponent},
  {path:"profile" ,component:ProfileComponent},
  {path:"produit/:nomCategorie" ,component:ProduitComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
