import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagePage } from './page';

import { HeaderComponentModule } from '../../components/header/header.module';
import { FooterComponentModule } from '../../components/footer/footer.module';

import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    PagePage,
  ],
  imports: [
    IonicPageModule.forChild(PagePage),

    HeaderComponentModule,
    FooterComponentModule,

    PipesModule
  ],
})
export class PagePageModule {}
