import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { NavProvider } from '../../providers/nav/nav';
import { MetaProvider } from '../../providers/meta/meta';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(
    private nav: NavProvider,
    private meta: MetaProvider
  ) {
  }

  ionViewDidLoad() {
    this.meta.set({
      title: 'Contact me'
    });
  }

}
