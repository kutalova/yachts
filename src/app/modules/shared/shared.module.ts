import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {RouterModule} from '@angular/router';
import {NgbDate, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddYachtModalWindowComponent } from './components/add-yacht-modal-window/add-yacht-modal-window.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AddYachtModalWindowComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    NgxGalleryModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FormsModule,
    NgbModule,
    NgxGalleryModule,
    ReactiveFormsModule,
    AddYachtModalWindowComponent,
  ],
  bootstrap: [AddYachtModalWindowComponent],
  entryComponents: [AddYachtModalWindowComponent]
})
export class SharedModule {
}
