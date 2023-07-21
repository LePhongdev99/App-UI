import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  
  addStudentRequest: Student = {
    id : "",
    name : "",
    email : "",
    address: "",
    scheduleId: 0
  };
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    
  }
  addStudent() {

    this.studentService.addStudent(this.addStudentRequest)    
    .subscribe (
    {
      next: (student) => {
        this.router.navigate(['students']);
      }
      // error:(response) =>{
      //   console.log(response);
      // }           
    }
    )
  }
  
}
