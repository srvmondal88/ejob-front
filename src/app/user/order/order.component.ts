import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{

  carts:any=[];
  constructor(private userService:UserserviceService){}

  ngOnInit(): void {

    this.getAllOrders();
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
