import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthorPage } from './author';

import { HeaderComponentModule } from '../../components/header/header.module';
import { FooterComponentModule } from '../../components/footer/footer.module';
import { SidebarComponentModule } from '../../components/sidebar/sidebar.module';

@NgModule({
  declarations: [
    AuthorPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthorPage),

    HeaderComponentModule,
    FooterComponentModule,
    SidebarComponentModule
  ],
})
export class AuthorPageModule {}
