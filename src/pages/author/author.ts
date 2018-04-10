import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { NavProvider } from '../../providers/nav/nav';
import { MetaProvider } from '../../providers/meta/meta';
import { SheetbaseProvider } from '../../providers/sheetbase/sheetbase';

@IonicPage({
  segment: 'author/:authorId'
})
@Component({
  selector: 'page-author',
  templateUrl: 'author.html',
})
export class AuthorPage {

  authorId: string;
  author: any;

  posts: any[];

  constructor(
    private params: NavParams,

    private nav: NavProvider,
    private sheetbase: SheetbaseProvider,
    private meta: MetaProvider
  ) {
    this.authorId = this.params.get('authorId');
  }
  
  ionViewDidLoad() {
    let metaInterval = setInterval(() => {
      if(this.author) {
        this.meta.set({
          title: this.author.value || this.author.name
        });
        clearInterval(metaInterval);
      }
    }, 500);
    setTimeout(() => {
      clearInterval(metaInterval);
    }, 5000);
  }

  ngOnInit() {
    if(!this.author && this.authorId) {
      this.sheetbase.get('authors', this.authorId)
      .subscribe(author => {
        this.author = author;
      });
    }

    this.sheetbase.get('posts', null, {
      orderByKey: 'author/'+ this.authorId,
      equalTo: '!null'
    }).subscribe(posts => {
      this.posts = posts;
    });
  }



}
