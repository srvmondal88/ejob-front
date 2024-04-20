import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  p: any = 1;
  count: any = 5
  users:any=[];
  constructor(private spinner: NgxSpinnerService,private adminService:AdminService){}

  ngOnInit(): void {
     this.getAllUsers();
  }

  getAllUsers()
  {
    this.spinner.show();
     return this.adminService.getAllUsers().subscribe({
       next:(res)=>{
          this.users = res.result;

          setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
          }, 5000);
       },
       error:(error)=>{
        console.log(error);
       }
     })


  }

}
