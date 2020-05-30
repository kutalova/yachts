import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BannerComponent} from './components/banner/banner.component';
import {OffersGridComponent} from './components/offers-grid/offers-grid.component';
import {YachtCardComponent} from './components/yacht-card/yacht-card.component';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {MainpageRoutingModule} from './mainpage.routing.module';
import {MainpageComponent} from './components/mainpage/mainpage.component';
import {ContactsComponent} from './components/banner/contacts/contacts.component';


@NgModule({
  declarations: [
    BannerComponent,
    OffersGridComponent,
    YachtCardComponent,
    MainpageComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainpageRoutingModule,
    SharedModule
  ],
  exports: [
    BannerComponent,
    OffersGridComponent,
    YachtCardComponent,
    MainpageComponent,
    ContactsComponent
  ]
})
export class MainpageModule {
}
