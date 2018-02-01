import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
import { ToolboxComponent } from './courses/toolbox/toolbox.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        CoursesComponent,
        CourseComponent,
        ToolboxComponent,
        MainComponent
    ],
    exports: [
        MainComponent
    ]
})
export class MainModule { }
