import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('modalRef') modalRef;

  constructor() {}

  ngOnInit() {}

  openModal() {
    this.modalRef.nativeElement.openModal();
  }

  closeModal() {
    this.modalRef.nativeElement.closeModal();
  }
}
