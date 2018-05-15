import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { DataService as DataProvider } from 'sheetbase-angular';

import { NavProvider } from '../../providers/nav/nav';
import { MetaProvider } from '../../providers/meta/meta';

@IonicPage({
  segment: 'post/:postId'
})
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
    
  postId: string;
  post: any;
  
  posts: any[];

  constructor(
    private params: NavParams,

    private sheetbaseData: DataProvider,

    private nav: NavProvider,
    private meta: MetaProvider
  ) {
    this.postId = this.params.get('postId');
    this.post = this.params.get('post');
  }

  ionViewDidLoad() {
    let metaInterval = setInterval(() => {
      if(this.post) {
        this.meta.set({
          title: this.post.value || this.post.title
        });
        clearInterval(metaInterval);
      }
    }, 500);
    setTimeout(() => {
      clearInterval(metaInterval);
    }, 5000);
  }

  ngOnInit() {
    if(this.post) this.getRelatedPosts();

    if(!this.post && this.postId) {
      this.sheetbaseData.get('posts', this.postId)
      .subscribe(post => {
        this.post = post;
        
        this.getRelatedPosts();
      }, error => {return});
    }
  }
  
  getRelatedPosts() {
    this.sheetbaseData.get('posts', null, {
      orderByKey: Object.keys(this.post.tags||{})[0] ? ('tags/'+ Object.keys(this.post.tags)[0]): ('categories/'+ (Object.keys(this.post.categories||{})[0] ? Object.keys(this.post.categories)[0]: 'uncategorized')),
      equalTo: '!null',

      limitToFirst: 12
    }).subscribe(posts => {
      if(posts.length >= 12) return this.finalizeRelatedPosts(posts);

      // get recent posts
      this.sheetbaseData.get('posts', null, {
        orderByKey: 'data',
        order: 'desc',
  
        limitToFirst: 12
      }).subscribe(recentPosts => {
        this.finalizeRelatedPosts((posts||[]).concat(recentPosts));
      }, error => {return});

    }, error => {return});
  }

  finalizeRelatedPosts(posts: any[]): void {    
    let postsR1 = [];
    let postsR2 = [];

    let postIds = {};
    (posts||[]).forEach(post => {      
      if(!postIds[post.$key]) {
        postIds[post.$key] = true;
        postsR1.push(post);
      }
    });

    (postsR1||[]).forEach(post => {
      if(post.$key !== this.post.$key) postsR2.push(post);
    });
    
    this.posts = postsR2.slice(0, 11);
  }

}
