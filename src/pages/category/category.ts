import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { NavProvider } from '../../providers/nav/nav';
import { MetaProvider } from '../../providers/meta/meta';
import { SheetbaseProvider } from '../../providers/sheetbase/sheetbase';

@IonicPage({
  segment: 'category/:categoryId'
})
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  categoryId: string;
  category: any;

  posts: any[];

  constructor(
    private params: NavParams,

    private nav: NavProvider,
    private sheetbase: SheetbaseProvider,
    private meta: MetaProvider
  ) {
    this.categoryId = this.params.get('categoryId');
    this.category = this.params.get('category');
  }
  
  ionViewDidLoad() {
    let metaInterval = setInterval(() => {
      if(this.category) {
        this.meta.set({
          title: this.category.value || this.category.title
        });
        clearInterval(metaInterval);
      }
    }, 500);
    setTimeout(() => {
      clearInterval(metaInterval);
    }, 5000);
  }

  ngOnInit() {
    if(!this.category && this.categoryId) {
      this.sheetbase.get('categories', this.categoryId)
      .subscribe(category => {
        this.category = category;
      });
    }

    this.sheetbase.get('posts', null, {
      orderByKey: 'categories/'+ this.categoryId,
      equalTo: '!null'
    }).subscribe(posts => {
      this.posts = posts;
    });
  }



}
