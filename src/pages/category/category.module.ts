import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryPage } from './category';

import { HeaderComponentModule } from '../../components/header/header.module';
import { FooterComponentModule } from '../../components/footer/footer.module';
import { PostsComponentModule } from '../../components/posts/posts.module';
import { SidebarComponentModule } from '../../components/sidebar/sidebar.module';

@NgModule({
  declarations: [
    CategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoryPage),

    HeaderComponentModule,
    FooterComponentModule,
    PostsComponentModule,
    SidebarComponentModule
  ],
})
export class CategoryPageModule {}
