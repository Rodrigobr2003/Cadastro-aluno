import { Component } from '@angular/core';
import { Student } from '../student';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students: Student[] = [ ]

  formGroupStudent: FormGroup;

  constructor(private formBuilder: FormBuilder){
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
