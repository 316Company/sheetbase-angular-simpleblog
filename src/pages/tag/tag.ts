import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { DataService as DataProvider } from 'sheetbase-angular';

import { NavProvider } from '../../providers/nav/nav';
import { MetaProvider } from '../../providers/meta/meta';

@IonicPage({
  segment: 'tag/:tagId'
})
@Component({
  selector: 'page-tag',
  templateUrl: 'tag.html',
})
export class TagPage {

  tagId: string;
  tag: any;

  posts: any[];

  constructor(
    private params: NavParams,

    private sheetbaseData: DataProvider,
    
    private nav: NavProvider,
    private meta: MetaProvider
  ) {
    this.tagId = this.params.get('tagId');
    this.tag = this.params.get('tag');
  }
  
  ionViewDidLoad() {
    let metaInterval = setInterval(() => {
      if(this.tag) {
        this.meta.set({
          title: this.tag.value || this.tag.title
        });
        clearInterval(metaInterval);
      }
    }, 500);
    setTimeout(() => {
      clearInterval(metaInterval);
    }, 5000);
  }

  ngOnInit() {
    if(!this.tag && this.tagId) {
      this.sheetbaseData.get('tags', this.tagId)
      .subscribe(tag => {
        this.tag = tag;
      }, error => {return});
    }

    this.sheetbaseData.get('posts', null, {
      orderByKey: 'tags/'+ this.tagId,
      equalTo: '!null'
    }).subscribe(posts => {
      this.posts = posts;
    }, error => {return});
  }



}
