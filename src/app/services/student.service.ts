import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]>{
    return this.http.get<Student[]>('https://localhost:7212/getStudent');
  }

  addStudent(addStudentRequest: Student): Observable<Student>{
    addStudentRequest.id = "9245fe4a-d402-451c-b9ed-9c1a04247482";
    return this.http.post<Student>('https://localhost:7212/createStudent', addStudentRequest);
  }

  getStudent(id: string): Observable<Student>{
    return this.http.get<Student>('https://localhost:7212/getStudent/'+ id);
  }

  updateStudent(id: string, editStudentRequest: Student): Observable<Student>{
    return this.http.put<Student>('https://localhost:7212/updateStudent/' + id,editStudentRequest );
  }

  deleteStudent(id: string): Observable<Student>{
    return this.http.delete<Student>('https://localhost:7212/deleteStudent/' + id);
  }
}
