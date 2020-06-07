import {Component, OnInit} from '@angular/core';
import {YachtCardInterface} from '../../../shared/interfaces/yachtCard.interface';

@Component({
  selector: 'app-offers-grid',
  templateUrl: './offers-grid.component.html',
  styleUrls: ['./offers-grid.component.scss']
})
export class OffersGridComponent implements OnInit {

  yachts: YachtCardInterface[] = [
    {
      id: 1,
      name: 'Beneteau 43',
      img: '/assets/images/yacht1.png',
      type: 'Парусные яхты',
      price_per_hour: 'от 2200 UAH',
      price_per_day: 'от 20 800 UAH',
      capacity: 12,
      beds: '8+2',
      showers: 2
    },     {
      id: 2,
      name: 'Beneteau 43',
      img: '/assets/images/yacht1.png',
      type: 'Парусные яхты',
      price_per_hour: 'от 2200 UAH',
      price_per_day: 'от 20 800 UAH',
      capacity: 12,
      beds: '8+2',
      showers: 2
    },    {
      id: 14,
      name: 'Beneteau 43',
      img: '/assets/images/yacht1.png',
      type: 'Парусные яхты',
      price_per_hour: 'от 2200 UAH',
      price_per_day: 'от 20 800 UAH',
      capacity: 12,
      beds: '8+2',
      showers: 2
    },    {
      id: 19,
      name: 'Beneteau 43',
      img: '/assets/images/yacht1.png',
      type: 'Парусные яхты',
      price_per_hour: 'от 2200 UAH',
      price_per_day: 'от 20 800 UAH',
      capacity: 12,
      beds: '8+2',
      showers: 2
    },    {
      id: 16,
      name: 'Beneteau 43',
      img: '/assets/images/yacht1.png',
      type: 'Парусные яхты',
      price_per_hour: 'от 2200 UAH',
      price_per_day: 'от 20 800 UAH',
      capacity: 12,
      beds: '8+2',
      showers: 2
    },    {
      id: 13,
      name: 'Beneteau 43',
      img: '/assets/images/yacht1.png',
      type: 'Парусные яхты',
      price_per_hour: 'от 2200 UAH',
      price_per_day: 'от 20 800 UAH',
      capacity: 12,
      beds: '8+2',
      showers: 2
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
