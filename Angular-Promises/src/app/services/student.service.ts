import { StudentModel } from '../models/student';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  URL: string = 'https://3f09-181-231-122-56.ngrok-free.app/';

  constructor(private http : HttpClient) {}

  getAllStudents() {
    return this.http.get(this.URL + "student/getAll")
  }

  getTotalStudents() {
    return this.http.get(this.URL + "student/total")
  }

  addStudent(student: StudentModel) {
    return this.http.post<any>(this.URL + 'student', student);
  }

  modifyStudent(student: StudentModel) {
    return this.http.post<any>(this.URL + 'student/' + student.id + "/update", student)
  }

  deleteStudent(student: StudentModel) {
    return this.http.post(this.URL + 'student/' + student.id + "/delete", student);
  }
}
