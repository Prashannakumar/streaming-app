import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openModalDialogCustomClass(content: any) {
    this.modalService.open(content, {
      modalDialogClass: 'dark-modal',
      backdropClass: 'light-blue-backdrop',
    });
  }
}
