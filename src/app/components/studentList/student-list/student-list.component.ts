import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList: Student[] = [];

  constructor(private studentService: StudentService ) { }

  ngOnInit(): void {
    this.studentService.getAllStudents()
    .subscribe({
      next: (students) => {
        this.studentList = students;
      }
      // error: (response) =>{
      //   console.log(response);
      // }
    })
  }
}
