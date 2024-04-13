import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  calrt:boolean=false;
  products:any=[];
  categories:any=[];
  qtyclass:boolean=false;
    ngOnInit(): void {

      this.getCategories();

      let data = {
        "cat_id":""
      };

      this.getProducts(data);
    }

    constructor(private userService:UserserviceService,private router:Router){}

    getProducts(data:any)
    {
       return this.userService.getProducts(data).subscribe({
        next:(res)=>{
           this.products=res.result;
           console.log(this.products);
        },
        error:(error)=>{
          console.log(error)
        }
       })
    }

    getCategories()
    {
       return this.userService.getcategory().subscribe({
         next:(res)=>{
             this.categories = res.result;
         },
         error:(error)=>{
           console.log(error);
         }
       })
    }

    addcart(pid:any,qty:any,price:any)
    {
      // console.log(qty);
      if(qty == '')
      {
         this.qtyclass = true;
         return
      }
      let user = JSON.parse(sessionStorage.getItem('userdetails'));
      let userId = user.user_id;

      let tot = price*qty;
      let payload={
        "product_id":pid,
        "user_id":userId,
        "qty":qty,
        "tot_price":tot,
        "status":1
      }

      this.userService.addToCart(payload).subscribe({
        next:(res)=>{
           if(res.status == 1)
           {
               this.calrt=true;
              //  this.router.navigateByUrl('/user/cart');
           }
        },
        error:(error)=>{
          console.log(error);
        }
      })


      //  console.log(payload);
    }

    getid(id:any)
    {
       console.log(id);

       let data = {
        "cat_id":id
       };

       this.getProducts(data);
    }
}
