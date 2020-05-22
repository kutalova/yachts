import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', loadChildren: () => import('./modules/mainpage/mainpage.module').then(m => m.MainpageModule) ,
  },
  {
    path: 'yy', pathMatch: 'full', loadChildren: () => import('./modules/yacht/yacht.module').then(m => m.YachtModule) ,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
