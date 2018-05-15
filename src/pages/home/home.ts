import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { DataService as DataProvider } from 'sheetbase-angular';

import { NavProvider } from '../../providers/nav/nav';
import { MetaProvider } from '../../providers/meta/meta';

import { HELPER } from '../../statics/helper';

@IonicPage({
  segment: 'blog'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: any[];
  keyword: string;

  constructor(
    private sheetbaseData: DataProvider,
    
    private nav: NavProvider,
    private meta: MetaProvider
  ) {

  }

  ionViewDidLoad() {
    this.meta.set({
      title: 'My Blog powered by Sheetbase'
    });
  }


  ngOnInit() {
    this.sheetbaseData.get(
      'posts', null, {
        orderByKey: 'id',
        order: 'desc'
      }
    ).subscribe(posts => {
      this.posts = posts;
    }, error => {return});
  }


}
