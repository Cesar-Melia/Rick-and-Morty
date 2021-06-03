import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { CharactersDetailPageComponent } from './pages/characters-page/pages/characters-detail-page/characters-detail-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';
import { LocationsDetailPageComponent } from './pages/locations-page/pages/locations-detail-page/locations-detail-page.component';


const routes: Routes = [
{path: '', component: HomePageComponent},
{path: 'characters', component: CharactersPageComponent},
{path: 'contact', component: ContactPageComponent},
{path: 'locations', component: LocationsPageComponent},
{path: 'characters/:idCharacter', component: CharactersDetailPageComponent},
{path: 'episodes', component: EpisodesComponent},
{path: 'locations/:idLocation', component: LocationsDetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
