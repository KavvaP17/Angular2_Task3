import { CourseInterface } from '../../assets/interfaces/Course.interface';

export class Course implements CourseInterface {
    constructor(
        public id: number,
        public title: string,
        public creatingDate: number,
        public duration: number,
        public description: string
    ) { }
}
