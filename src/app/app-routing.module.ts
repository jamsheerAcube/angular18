import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CourseDetialsComponent } from './course-detials/course-detials.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { authGuard, authChildGuard } from './guards/auth.guard';
import { contactformGuard } from './guards/contactform.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: "employees", component: EmployeesComponent },
  { path: "**", component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
