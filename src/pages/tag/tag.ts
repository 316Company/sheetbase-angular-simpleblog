import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { NavProvider } from '../../providers/nav/nav';
import { MetaProvider } from '../../providers/meta/meta';
import { SheetbaseProvider } from '../../providers/sheetbase/sheetbase';

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

    private nav: NavProvider,
    private sheetbase: SheetbaseProvider,
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
      this.sheetbase.get('tags', this.tagId)
      .subscribe(tag => {
        this.tag = tag;
      });
    }

    this.sheetbase.get('posts', null, {
      orderByKey: 'tags/'+ this.tagId,
      equalTo: '!null'
    }).subscribe(posts => {
      this.posts = posts;
    });
  }



}
