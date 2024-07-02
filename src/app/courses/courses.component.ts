import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses: any[] = [
    { id: 1, title: "Angular", author: "jamsheer" },
    { id: 2, title: "Javascript", author: "jamsheer" },
    { id: 3, title: "Python", author: "jamsheer" },
    { id: 4, title: "Dotnet", author: "thafseer" }
  ]
}
