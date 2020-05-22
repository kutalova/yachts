import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {YachtComponent} from './components/yacht/yacht.component';

const routes: Routes = [
  {
  path: '', component: YachtComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class YachtRoutingModule {

}
