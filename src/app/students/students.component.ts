import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {
  students: Student[] = [ ]

  formGroupStudent: FormGroup;

  ngOnInit(): void {
    this.loadStudents()
  }

  loadStudents(){
    this.service.getStudents().subscribe({
      next: data => this.students = data
    })
  }

  constructor(private formBuilder: FormBuilder, private service : StudentService){

    this.formGroupStudent = formBuilder.group({
      id : [''],
      nome: [''],
      curso: [''],
    })
  }

  save(){
    this.students.push(this.formGroupStudent.value)
  }
}
