import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OffersGridComponent} from './components/offers-grid/offers-grid.component';

const routes: Routes = [{
  path: '', component: OffersGridComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainpageRoutingModule {

}
