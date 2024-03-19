import { Component } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  students: Student[] = [{id:1, nome:'Ronaldo Fenômeno', curso: "Copa de 2002"}]

}
