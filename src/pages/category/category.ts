import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { DataService as DataProvider } from 'sheetbase-angular';

import { NavProvider } from '../../providers/nav/nav';
import { MetaProvider } from '../../providers/meta/meta';

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

    private sheetbaseData: DataProvider,
    
    private nav: NavProvider,
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
      this.sheetbaseData.get('categories', this.categoryId)
      .then(category => {
        this.category = category;
      }).catch(error => {return});
    }

    this.sheetbaseData.get('posts', null, {
      orderByKey: 'categories/'+ this.categoryId,
      equalTo: '!null'
    }).then(posts => {
      this.posts = posts;
    }).catch(error => {return});
  }



}
