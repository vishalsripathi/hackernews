import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NewshomepageComponent } from './newshomepage/newshomepage.component';
import { ArticleComponent } from './article/article.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
@NgModule({
  declarations: [AppComponent, NewshomepageComponent, ArticleComponent, BookmarkComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
