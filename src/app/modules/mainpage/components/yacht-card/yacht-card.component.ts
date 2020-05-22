import {Component, Input, OnInit} from '@angular/core';
import {YachtCardInterface} from '../../../shared/interfaces/yachtCard.interface';

@Component({
  selector: 'app-yacht-card',
  templateUrl: './yacht-card.component.html',
  styleUrls: ['./yacht-card.component.scss']
})
export class YachtCardComponent implements OnInit {

  @Input() yacht: YachtCardInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
