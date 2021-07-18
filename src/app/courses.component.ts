import { Component } from '@angular/core';

@Component({
    selector: 'courses',    // <courses> - 'courses'
                            // <div id='courses'.. - '#courses'
                            // <div class='courses'.. - '.courses'
    template: `<h2>
                    {{ title }}
                </h2>
                <ul>
                    <li *ngFor="let course of courses">
                        {{ course }}
                    </li>
                </ul>`
})

export class CoursesComponent {
    title = 'List of Courses';
    courses = ["Course1", "Course2", "Course3"];
}