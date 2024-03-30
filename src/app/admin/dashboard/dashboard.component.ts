import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  admindata:any;
  ngOnInit(): void {


    this.admindata = JSON.parse(sessionStorage.getItem('admindetails'));
    console.log(this.admindata);
  }

}
