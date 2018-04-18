import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { SheetbaseService as SheetbaseProvider } from 'sheetbase-angular';

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
    private sheetbase: SheetbaseProvider,
    
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
    this.sheetbase.get(
      'posts', null, {
        orderByKey: 'id',
        order: 'desc'
      }
    ).subscribe(posts => {
      this.posts = posts;
    });
  }


}
