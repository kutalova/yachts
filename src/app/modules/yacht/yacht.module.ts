import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {YachtRoutingModule} from './yacht.routing.module';
import {GalleryComponent} from './components/gallery/gallery.component';
import {GearComponent} from './components/gear/gear.component';
import {InfoComponent} from './components/info/info.component';
import {PricesComponent} from './components/prices/prices.component';
import {SeeMoreComponent} from './components/see-more/see-more.component';
import {YachtComponent} from './components/yacht/yacht.component';


@NgModule({
  declarations: [
    GalleryComponent,
    GearComponent,
    InfoComponent,
    PricesComponent,
    SeeMoreComponent,
    YachtComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    YachtRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class YachtModule {
}
