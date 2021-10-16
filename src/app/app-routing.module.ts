import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChiffreMemoireComponent} from './pages/chiffre-memoire/chiffre-memoire.component';
import {AccueilComponent} from './pages/accueil/accueil.component';
import {GrilleMemoireComponent} from './pages/grille-memoire/grille-memoire.component';

const routes: Routes = [
  { path: 'chiffreMemoire', component: ChiffreMemoireComponent },
  { path: 'grilleMemoire', component: GrilleMemoireComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: '', component: AccueilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
