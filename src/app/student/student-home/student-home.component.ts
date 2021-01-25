import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  constructor(private data : SharedDataService ) { }
  alerte = '';
  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => 
      (this.alerte= message)); //<= Always get current value!
  }
  closeA(){
    this.data.changeMessage("close");
    }

}
