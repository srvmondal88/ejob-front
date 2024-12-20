import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlistitems',
  templateUrl: './wishlistitems.component.html',
  styleUrls: ['./wishlistitems.component.css']
})
export class WishlistitemsComponent implements OnInit {

  items: any = [];
  hiddenId: number[] = [];
  inputText: string[] = [];
  prodPrice:any =[];
  constructor(private userService: UserserviceService, private spinner: NgxSpinnerService,private router:Router) { }
  ngOnInit(): void {
    this.getWishlistItems();
  }


  getWishlistItems() {
    this.spinner.show();

    return this.userService.getWishlistItems().subscribe({
      next: (res) => {
        this.items = res.wishlist;
        console.log(res);
        this.spinner.hide();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  deleteItem(id: any) {
    return this.userService.delWishlistItems(id).subscribe({
      next: (res) => {
        this.getWishlistItems();
      },
      error: (error) => {
        console.log(error);
      }
    })
    console.log(id);
  }

  submitForm(hiddenValue: number, textValue: any,price:number): void {

    let userId = JSON.parse(sessionStorage.getItem('userdetails'));
    let cost = price*textValue;
    let payload={
      "product_id":hiddenValue,
      "user_id":userId.user_id,
      "qty":textValue,
      "tot_price": cost,
      "status":1
    }

    this.userService.addToCart(payload).subscribe({
      next:(res)=>{
          this.router.navigateByUrl('user/cart');
      },
      error:(error) =>{
        console.log(error);
      }
    })
    console.log('Hidden ID:', price);

  }
}
