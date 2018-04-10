import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostPage } from './post';

import { HeaderComponentModule } from '../../components/header/header.module';
import { FooterComponentModule } from '../../components/footer/footer.module';
import { PostsComponentModule } from '../../components/posts/posts.module';

@NgModule({
  declarations: [
    PostPage,
  ],
  imports: [
    IonicPageModule.forChild(PostPage),

    HeaderComponentModule,
    FooterComponentModule,
    PostsComponentModule
  ],
})
export class PostPageModule {}
