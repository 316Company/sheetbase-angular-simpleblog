import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { NavProvider } from '../../providers/nav/nav';
import { MetaProvider } from '../../providers/meta/meta';
import { SheetbaseProvider } from '../../providers/sheetbase/sheetbase';

import { HELPER } from '../../statics/helper';

@IonicPage({
  segment: 'blog'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  allPosts: any[];
  posts: any[];

  isSearching: boolean = false;

  constructor(
    private nav: NavProvider,
    private sheetbase: SheetbaseProvider,
    private meta: MetaProvider
  ) {

  }

  ionViewDidLoad() {
    this.meta.set({
      title: 'My Blog powered by Sheetbase'
    });
  }


  ngOnInit() {
    this.sheetbase.get('posts').subscribe(allPosts => {
      this.posts = allPosts;
      this.allPosts = allPosts;
    });
  }

  search(keyword) {
    if(keyword) {
      this.isSearching = true;
      this.posts = this.doSearch(
        this.allPosts, keyword,
        ['id', 'description', 'date', 'author', 'categories', 'tags']
      );
    } else {
      this.isSearching = false;
      this.posts = this.allPosts;
    }

  }

  doSearch(items: any[], keyword: string, fields: string[] = null) {
    let find = (item, keyword) => {
      let againstString = item.title || item.name;
      (fields||[]).forEach(field => {
        if(!item[field]) return;
        if(item[field] instanceof Object) return againstString += ' // '+ (JSON.stringify(item[field])).replace(/\{/gi, '').replace(/\"\}/gi, '').replace(/\{\"/gi, '').replace(/\"\:\"/gi, ' ').replace(/\"\,\"/gi, ' ').replace(/\"/gi, ''); 
        againstString += ' // '+ item[field];
      });
      againstString = againstString.toLowerCase();
      againstString = againstString +' // '+ HELPER.dashToSpace(againstString) +' // '+ HELPER.noDash(againstString);
      return againstString.indexOf(keyword.toLowerCase()) > -1;
    }
    return keyword ? (items || []).filter(item => { return find(item, HELPER.noMark(keyword)) }) : items;
  }


}
