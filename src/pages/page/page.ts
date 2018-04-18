import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { SheetbaseService as SheetbaseProvider } from 'sheetbase-angular';

import { NavProvider } from '../../providers/nav/nav';
import { MetaProvider } from '../../providers/meta/meta';

@IonicPage({
  segment: 'page/:pageId'
})
@Component({
  selector: 'page-page',
  templateUrl: 'page.html',
})
export class PagePage {

  pageId: string;
  page: any;

  constructor(
    private params: NavParams,

    private sheetbase: SheetbaseProvider,

    private nav: NavProvider,
    private meta: MetaProvider
  ) {
    this.pageId = this.params.get('pageId');
    this.page = this.params.get('page');
  }

  ionViewDidLoad() {
    let metaInterval = setInterval(() => {
      if(this.page) {
        this.meta.set({
          title: this.page.title
        });
        clearInterval(metaInterval);
      }
    }, 500);
    setTimeout(() => {
      clearInterval(metaInterval);
    }, 5000);
  }

  ngOnInit() {
    if(!this.page && this.pageId) {
      this.sheetbase.get('pages', this.pageId)
      .subscribe(page => {
        this.page = page;
      });
    }
  }

}
