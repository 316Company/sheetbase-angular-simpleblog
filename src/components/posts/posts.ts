import { Component, Input } from '@angular/core';

import { NavProvider } from '../../providers/nav/nav';

@Component({
  selector: 'app-posts',
  templateUrl: 'posts.html'
})
export class PostsComponent {

  @Input() singular: boolean = false;
  @Input('posts') posts: any[];

  constructor(
    private nav: NavProvider
  ) {

  }

}
