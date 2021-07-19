import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',    // <courses> - 'courses'
                            // <div id='courses'.. - '#courses'
                            // <div class='courses'.. - '.courses'
    template: `<h2>
                    {{ title }}
                </h2>
                <div>
                    <div class="row">
                        <div class="col-lg-3" *ngFor="let course of courses">
                            {{ course }}
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <input type="text" (keyup.enter)="onKeyUp()" />
                <br />
                <br />
                <div (click)="onDivClicked()">
                    <button (click)="onSave($event)" class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'grey'" [class.active]="isActive">
                        Save
                    </button>
                </div>`
})

export class CoursesComponent {
    title = 'List of Courses';
    // courses = ["Course1", "Course2", "Course3"];
    courses;
    // widthOfColumn = '40'; 
    isActive = true;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    onSave($event: Event) {
        $event.stopPropagation();
        console.log('Button was clicked', $event);
    }

    onDivClicked() {
        console.log('Div was clicked');
    }

    onKeyUp() {
        console.log('Enter was clicked');
    }
}