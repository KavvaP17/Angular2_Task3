import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/Course.model';
import { CoursesService } from '../../services/courses.service';
import { ModalService } from '../../services/modal.service';


@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

    coursesList: Array<Course> = [];

    constructor(private coursesService: CoursesService,
                private modalService: ModalService) { }

    ngOnInit(): void {
        this.coursesList = this.coursesService.getlist();
    }
    deleteCourse(id): void {
        this.modalService.modalShow(id);
    }
}
