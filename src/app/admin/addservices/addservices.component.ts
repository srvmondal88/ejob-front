import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-addservices',
  templateUrl: './addservices.component.html',
  styleUrls: ['./addservices.component.css']
})
export class AddservicesComponent implements OnInit {

  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings:any = {};

  ngOnInit(): void {
    // Sample data for dropdown

  }
}
