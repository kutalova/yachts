import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-yacht',
  templateUrl: './yacht.component.html',
  styleUrls: ['./yacht.component.scss']
})
export class YachtComponent implements OnInit {

  constructor(        private activatedRoute: ActivatedRoute,
                      private router: Router) { }

  ngOnInit(): void {
    console.log(this.activatedRoute);
  }

}
