import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detials',
  templateUrl: './course-detials.component.html',
  styleUrls: ['./course-detials.component.scss']
})
export class CourseDetialsComponent implements OnInit {
  courseId!: string;
  author!:string
  constructor(
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((url) => {
      this.courseId = url['id'];
      this.author = url['author'];
    })
  }
}
