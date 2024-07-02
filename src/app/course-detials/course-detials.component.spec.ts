import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetialsComponent } from './course-detials.component';

describe('CourseDetialsComponent', () => {
  let component: CourseDetialsComponent;
  let fixture: ComponentFixture<CourseDetialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseDetialsComponent]
    });
    fixture = TestBed.createComponent(CourseDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
