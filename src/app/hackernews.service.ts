import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Article } from './article';
@Injectable({
  providedIn: 'root',
})
export class HackernewsService {
  public Bookmarks: Article[] = [];

  constructor(private httpClient: HttpClient) {}
  public getData() {
    return this.httpClient
      .get<number[]>('https://hacker-news.firebaseio.com/v0/topstories.json')
      .pipe(
        map((e) => {
          return e.map((id) => {
            return this.httpClient.get<Article>(
              `https://hacker-news.firebaseio.com/v0/item/${id}.json`
            );
          });
        })
      );
  }
}

// https://hacker-news.firebaseio.com/v0/item/24300548.json?print=pretty
