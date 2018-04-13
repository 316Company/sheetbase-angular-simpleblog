import { Component } from '@angular/core';

import { SheetbaseService as SheetbaseProvider } from 'sheetbase-angular';

import { NavProvider } from '../../providers/nav/nav';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.html'
})
export class SidebarComponent {

  categories: any[];

  constructor(
    private sheetbase: SheetbaseProvider,

    private nav: NavProvider
  ) {
    
  }

  ngOnInit() {
    this.sheetbase.get('categories').subscribe(categories => {
      this.categories = categories;
    });
  }

}
