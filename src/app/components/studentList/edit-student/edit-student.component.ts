import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  editStudentRequest: Student ={
    id : "",
    name : "",
    email : "",
    address: "",
    scheduleId: 1
  }

  constructor(private studentService: StudentService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
      this.route.paramMap.subscribe(
      {
        next: (params) => {
          const id = params.get('id');

          if(id){
            this.studentService.getStudent(id)
            .subscribe(
            {
              next: (response) =>{
                this.editStudentRequest = response;
              }
            }
            )
          }
        }
      }
      )
  }

  updateStudent(){
    this.studentService.updateStudent(this.editStudentRequest.id, this.editStudentRequest)
    .subscribe({
      next: (response) =>{
        this.router.navigate(['../students']);
      }
    });
  }

  deleteStudent(id:string){
    console.warn
    this.studentService.deleteStudent(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['students']);
      }
    })
  }
}
