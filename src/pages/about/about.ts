import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { NavProvider } from '../../providers/nav/nav';
import { MetaProvider } from '../../providers/meta/meta';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(
    private nav: NavProvider,
    private meta: MetaProvider
  ) {
  }

  ionViewDidLoad() {
    this.meta.set({
      title: 'About me'
    });
  }

}
