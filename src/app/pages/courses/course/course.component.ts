import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../../models/Course.model';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

    @Input() course: Course;
    @Output() deleteCourse = new EventEmitter<number>();

    constructor() { }

    ngOnInit() {
    }

    delete(): void {
        this.deleteCourse.emit(this.course.id);
    }

    minutesToStr(minutes: number): string {
        const h: number = Math.floor(minutes / 60);
        const m: number = minutes - h * 60;
        return (h > 0) ? `${h}h ${m}min` : `${m}min`;
    }
}
