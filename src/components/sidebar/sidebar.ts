import { Component } from '@angular/core';

import { NavProvider } from '../../providers/nav/nav';
import { SheetbaseProvider } from '../../providers/sheetbase/sheetbase';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.html'
})
export class SidebarComponent {

  categories: any[];

  constructor(
    private nav: NavProvider,
    private sheetbase: SheetbaseProvider
  ) {
    
  }

  ngOnInit() {
    this.sheetbase.get('categories').subscribe(categories => {
      this.categories = categories;
    });
  }

}
