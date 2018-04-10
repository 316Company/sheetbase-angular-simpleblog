import { Component, Input, NgZone } from '@angular/core';

import { NavProvider } from '../../providers/nav/nav';

@Component({
  selector: 'app-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  @Input() page: string;

  constructor(
    private zone: NgZone,

    private nav: NavProvider
  ) {
  }

}
