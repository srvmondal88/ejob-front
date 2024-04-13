import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  ocart:any=[];
  arr:any=[];
  carts:any=[];
  tot:any;
  ngOnInit(): void {
    this.spinner.show();
       this.getCarts();
       setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 5000);
  }

  constructor(private userservice:UserserviceService,private router:Router,private spinner: NgxSpinnerService){}

  getCarts()
  {
     return this.userservice.getCartItems().subscribe({
      next:(res)=>{
        this.carts = res.result;
          console.log(this.carts);
      },
      error:(error)=>{

      }
     })
  }

  delete(id:any)
  {
     console.log(id);

     this.userservice.deletCart(id).subscribe({
       next:(res) =>{
           if(res.status == 1 && res.message == 'successfully deleted')
            {
                this.getCarts();
            }
       },
       error:(error)=>{
          console.log(error)
       }
     })
  }

  buyp(n:any)
  {
    if (n.target.checked) {
      this.arr.push(n.target.value)
    } else {

      const index = this.arr.indexOf(n.target.value);

      this.arr.splice(index, 1);

    }
    console.log(this.arr);
  }

  buy()
  {
    let total = 0;
     let payload = {
      "cart_id":this.arr
     };

     this.userservice.getCartById(payload).subscribe({
      next:(res)=>{
          this.ocart=res.result;

          this.ocart.forEach(function (item, index) {
            total += Number(item.price);
          });
          this.tot= total;
          console.log(total);
      },
      error:(error)=>{
        console.log(error);
      }
     })
  }

  storeOrder(){



    this.userservice.storeOrder(this.ocart).subscribe({
       next:(res)=>{
           if(res.status == 1 && res.result == 1)
            {
              Swal.fire({
                title: "Great!",
                text: "You successfuly purchased the products!",
                icon: "success"
              });
               this.router.navigateByUrl('/user/orders');
            }
       },
       error:(error)=>{
          console.log(error)
       }
    })
    console.log(this.ocart);
  }
}
