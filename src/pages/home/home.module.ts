import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

import { HeaderComponentModule } from '../../components/header/header.module';
import { FooterComponentModule } from '../../components/footer/footer.module';
import { PostsComponentModule } from '../../components/posts/posts.module';
import { SidebarComponentModule } from '../../components/sidebar/sidebar.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),

    HeaderComponentModule,
    FooterComponentModule,
    PostsComponentModule,
    SidebarComponentModule
  ],
})
export class HomePageModule {}
