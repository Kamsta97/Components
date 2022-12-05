import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './auth/guards/authorized.guard';
import { NotAuthorizedGuard } from './auth/guards/not-authorized.guard';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
  {path: '', component: CoursesComponent},
  {path: 'login', component: LoginComponent, canActivate: [NotAuthorizedGuard]},
  {path: 'registration', component: RegistrationComponent, canActivate: [NotAuthorizedGuard]},
  {path:'courses', component:CoursesComponent, canLoad: [AuthorizedGuard], canActivate: [AdminGuard]},
  {path:'course', component:CourseComponent, canLoad: [AuthorizedGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
