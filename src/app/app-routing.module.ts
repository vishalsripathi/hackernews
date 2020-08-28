import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewshomepageComponent } from './newshomepage/newshomepage.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: NewshomepageComponent },
  { path: 'bookmarks', component: BookmarkComponent },
  { path: 'article', component: ArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
