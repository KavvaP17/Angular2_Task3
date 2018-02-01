import { Injectable } from '@angular/core';
import { Course } from '../models/Course.model';

@Injectable()
export class CoursesService {

    private courses: Array<Course> = [
        new Course(1, 'title 1', Date.now(), 100, `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the`),
        new Course(2, 'title 2', (new Date(2018, 0, 10)).getTime(), 200, `Lorem Ipsum is simply dummy text of the printing.
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the`),
        new Course(3, 'title 3', (new Date(2018, 0, 9)).getTime(), 300, `Lorem Ipsum and typesetting industry.
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the`)
    ];

    constructor() { }

    getlist(): Array<Course> {
        return this.courses;
    }

    createCourse(id: number, title: string, creatingDate: number, duration: number, description: string): void {
        const course: Course = new Course(id, title, creatingDate, duration, description);
        this.courses.push(course);
    }

    getItemById(id: number): Course | undefined {
        return this.courses.find((item) => {
            return item.id === id;
        });
    }

    updateItem(course: Course, title: string, creatingDate: number, duration: number, description: string): void {
        course.title = title;
        course.creatingDate = creatingDate;
        course.duration = duration;
        course.description = description;
    }

    removeItem(id: number): void {
        this.courses.splice(this.courses.indexOf(this.getItemById(id)), 1);
    }

}
