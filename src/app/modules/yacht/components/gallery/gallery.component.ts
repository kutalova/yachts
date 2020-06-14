import {Component, OnInit} from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-yacht-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() {
  }

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/banner/banner_mobile.png',
        medium: 'assets/images/banner/banner_middle.png',
        big: 'assets/images/banner/banner_max.png'
      },      {
        small: 'assets/images/banner/banner_mobile.png',
        medium: 'assets/images/banner/banner_middle.png',
        big: 'assets/images/banner/banner_max.png'
      },      {
        small: 'assets/images/banner/banner_mobile.png',
        medium: 'assets/images/banner/banner_middle.png',
        big: 'assets/images/banner/banner_max.png'
      },      {
        small: 'assets/images/banner/banner_mobile.png',
        medium: 'assets/images/banner/banner_middle.png',
        big: 'assets/images/banner/banner_max.png'
      }, {
        small: 'assets/images/banner/banner_mobile.png',
        medium: 'assets/images/banner/banner_middle.png',
        big: 'assets/images/banner/banner_max.png'
      },

    ];
  }

}
