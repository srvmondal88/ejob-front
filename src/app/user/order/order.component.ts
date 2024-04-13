import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{

  carts:any=[];
  constructor(private userService:UserserviceService,private spinner: NgxSpinnerService){}

  ngOnInit(): void {
    this.spinner.show();

    this.getAllOrders();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

  getAllOrders()
  {
     return this.userService.getAllOrders().subscribe({
      next:(res)=>{
          this.carts = res.result;
          console.log(this.carts);
      },
      error:(error)=>{
        console.log(error)
      }
     })
  }

}
