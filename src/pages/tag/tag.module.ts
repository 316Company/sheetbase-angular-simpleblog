import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TagPage } from './tag';

import { HeaderComponentModule } from '../../components/header/header.module';
import { FooterComponentModule } from '../../components/footer/footer.module';
import { PostsComponentModule } from '../../components/posts/posts.module';
import { SidebarComponentModule } from '../../components/sidebar/sidebar.module';

@NgModule({
  declarations: [
    TagPage,
  ],
  imports: [
    IonicPageModule.forChild(TagPage),

    HeaderComponentModule,
    FooterComponentModule,
    PostsComponentModule,
    SidebarComponentModule
  ],
})
export class TagPageModule {}
