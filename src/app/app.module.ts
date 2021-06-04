import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HeaderComponent } from './core/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';
import { CharactersDetailPageComponent } from './pages/characters-page/pages/characters-detail-page/characters-detail-page.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { LocationsDetailPageComponent } from './pages/locations-page/pages/locations-detail-page/locations-detail-page.component';
import { MarkTextPipe } from './shared/pipes/mark-text.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeComponent } from './core/theme/theme.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CharactersPageComponent,
    ContactPageComponent,
    HeaderComponent,
    GalleryComponent,
    LocationsPageComponent,
    CharactersDetailPageComponent,
    EpisodesComponent,
    LocationsDetailPageComponent,
    MarkTextPipe,
    ThemeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
