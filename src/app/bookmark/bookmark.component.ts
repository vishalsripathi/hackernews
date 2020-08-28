import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { HackernewsService } from '../hackernews.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css'],
})
export class BookmarkComponent implements OnInit {
  public Bookmarks: Article[] = [];
  constructor(private h: HackernewsService) {}

  ngOnInit(): void {
    this.Bookmarks = this.h.Bookmarks;
  }

  RemoveFromBookmarks(i) {
    this.Bookmarks.splice(i, 1);
    this.h.Bookmarks = this.Bookmarks;
  }
}
