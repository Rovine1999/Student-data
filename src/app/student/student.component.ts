import { Component, OnInit } from '@angular/core';
import { StudentreportService } from '../studentreport.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public student:any;
  constructor(private _studentReportService: StudentreportService){}


  ngOnInit(): void {
    this._studentReportService.getStudentReport().subscribe(data =>
       this.student = data
      
       );
  }

}

