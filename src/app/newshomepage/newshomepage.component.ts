import { Component, OnInit } from '@angular/core';
import { HackernewsService } from '../hackernews.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin } from 'rxjs';
import { Article } from '../article';

@Component({
  selector: 'app-newshomepage',
  templateUrl: './newshomepage.component.html',
  styleUrls: ['./newshomepage.component.css'],
})
export class NewshomepageComponent implements OnInit {
  public ArticleList: Article[] = [];
  public Bookmarks: Article[] = [];
  closeResult: string;

  constructor(private h: HackernewsService, private modalService: NgbModal) {}

  ngOnInit() {
    this.h.getData().subscribe((data) => {
      data.forEach(
        (d) => {
          d.subscribe((d) => {
            this.ArticleList.push(d);
          });
        }
        // forkJoin(data).subscribe((d) => {
        //   this.ArticleList = d;
        // });
      );
    });
  }

  addToBookmarks(i) {
    this.Bookmarks.push(this.ArticleList[i]);
    this.h.Bookmarks.push(this.ArticleList[i]);
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed`;
        }
      );
  }

  onScroll() {
    console.log('scrolled');
  }
}
