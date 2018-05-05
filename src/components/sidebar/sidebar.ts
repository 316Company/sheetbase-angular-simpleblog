import { Component } from '@angular/core';

import { DataService as DataProvider } from 'sheetbase-angular';

import { NavProvider } from '../../providers/nav/nav';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.html'
})
export class SidebarComponent {

  categories: any[];

  constructor(
    private sheetbaseData: DataProvider,

    private nav: NavProvider
  ) {
    
  }

  ngOnInit() {
    this.sheetbaseData.get('categories')
    .then(categories => {
      this.categories = categories;
    }).catch(error => {return});
  }

}
