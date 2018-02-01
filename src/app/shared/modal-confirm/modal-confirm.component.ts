import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent implements OnInit {
    public title: string;

  constructor(private modalService: ModalService,
              private coursesService: CoursesService) { }

  ngOnInit() {
        const id = this.modalService.getDeletedItemId();
        this.title = this.coursesService.getItemById(id).title;
  }

  clickNo(): void {
      this.modalService.modalHide();
  }

  clickYes(): void {
      this.coursesService.removeItem(this.modalService.getDeletedItemId());
      this.modalService.modalHide();
  }

}
