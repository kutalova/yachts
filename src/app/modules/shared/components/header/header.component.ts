import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddYachtModalWindowComponent} from '../add-yacht-modal-window/add-yacht-modal-window.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navbarOpen = false;
  constructor(private modalService: NgbModal) { }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  ngOnInit(): void {
  }
  open() {
    const modalRef = this.modalService.open(AddYachtModalWindowComponent);
    modalRef.componentInstance.name = 'World';
  }

}
