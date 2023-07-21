import { Component, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/studentList/student-list/student-list.component';
import { AddStudentComponent } from './components/studentList/add-student/add-student/add-student.component';
import { EditStudentComponent } from './components/studentList/edit-student/edit-student.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full'
  },
  {
    path: 'students',
    component: StudentListComponent
    // children: [
    //   {
    //     path:'edit-student/:id',
    //     component: EditStudentComponent
    //   }
    // ]
  },

  {
    path:'edit-student/:id',
    component: EditStudentComponent
  },

  {
    path: 'add-student',
    component: AddStudentComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
