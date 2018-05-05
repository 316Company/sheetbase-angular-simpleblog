import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { DataService as DataProvider } from 'sheetbase-angular';

import { NavProvider } from '../../providers/nav/nav';
import { MetaProvider } from '../../providers/meta/meta';

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

    private sheetbaseData: DataProvider,
    
    private nav: NavProvider,
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
      this.sheetbaseData.get('authors', this.authorId)
      .then(author => {
        this.author = author;
      }).catch(error => {return});
    }

    this.sheetbaseData.get('posts', null, {
      orderByKey: 'author/'+ this.authorId,
      equalTo: '!null'
    }).then(posts => {
      this.posts = posts;
    }).catch(error => {return});
  }



}
