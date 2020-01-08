import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { ThemesComponent } from './themes/themes.component';
import { AuthorsComponent } from './authors/authors.component';
import { WriteComponent } from './write/write.component';
import { DraftsComponent } from './drafts/drafts.component';

const routes: Routes = [ 
  {path: '', redirectTo: 'articles', pathMatch: 'full'},
  {path: 'articles', component: ArticlesComponent}, 
  {path: 'themes', component: ThemesComponent}, 
  {path: 'authors', component: AuthorsComponent},
  {path: 'write', component: WriteComponent},
  {path: 'drafts', component: DraftsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ArticlesComponent, ThemesComponent, AuthorsComponent];