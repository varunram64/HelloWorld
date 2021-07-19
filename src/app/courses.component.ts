import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',    // <courses> - 'courses'
                            // <div id='courses'.. - '#courses'
                            // <div class='courses'.. - '.courses'
    template: `<h2>
                    {{ title }}
                </h2>
                <table>
                    <tr>
                        <td [width]="widthOfColumn" *ngFor="let course of courses">
                            {{ course }}
                        </td>
                    </tr>
                </table>`
})

export class CoursesComponent {
    title = 'List of Courses';
    // courses = ["Course1", "Course2", "Course3"];
    courses;
    widthOfColumn = '40'; 

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}