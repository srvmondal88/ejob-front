import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  calrt: boolean = false;
  products: any = [];
  categories: any = [];
  qtyclass: boolean = false;
  prod_id: any;
  star: number = 0;
  stars = new Array(5);
  num: number = 0;
  comment: any;
  allreviews: any = [];
  cat_id: number;

  constructor(private userService: UserserviceService, private router: Router, private spinner: NgxSpinnerService) { }

  p: any = 1;
  count: any = 5;

  ngOnInit(): void {

    this.spinner.show();

    this.getCategories();

    let data = {
      "cat_id": ""
    };

    this.getProducts(data);

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }


  getProducts(data: any) {
    return this.userService.getProducts(data).subscribe({
      next: (res) => {
        this.products = res.result;
        console.log(this.products);
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  getCategories() {
    return this.userService.getcategory().subscribe({
      next: (res) => {
        this.categories = res.result;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  addcart(pid: any, qty: any, price: any) {
    // console.log(qty);
    if (qty == '') {
      this.qtyclass = true;
      return
    }
    let user = JSON.parse(sessionStorage.getItem('userdetails'));
    let userId = user.user_id;

    let tot = price * qty;
    let payload = {
      "product_id": pid,
      "user_id": userId,
      "qty": qty,
      "tot_price": tot,
      "status": 1
    }

    this.userService.addToCart(payload).subscribe({
      next: (res) => {
        if (res.status == 1) {
          this.calrt = true;
          //  this.router.navigateByUrl('/user/cart');
        }
      },
      error: (error) => {
        console.log(error);
      }
    })


    //  console.log(payload);
  }

  getid(id: any) {
    console.log(id);
    this.cat_id = id;
    let data = {
      "cat_id": id
    };

    this.getProducts(data);
  }

  addReview(data: any) {
    this.spinner.show();
    console.log(data);
    this.prod_id = data.id;
    return this.userService.getReviews(this.prod_id).subscribe({
      next: (res) => {
        this.star = res.result ? res.result.rating : 0;
        this.comment = res.result ? res.result.comment : '';
        this.spinner.hide();
      },
      error: (error) => {
        console.log(error);
        this.spinner.hide();
      }
    })
  }

  addStar(i: any) {
    this.star = i;
    let data = {
      "product_id": this.prod_id,
      "rating": i,
      "comment": this.comment
    };
    this.userService.addReview(data).subscribe({
      next: (res) => {
        if (res.result == 1) {
          console.log(res);
        }
      },
      error: (error) => {
        console.log(error);
      }
    });
    console.log(i);
  }

  saveChngs() {
    let data = {
      "product_id": this.prod_id,
      "rating": this.star,
      "comment": this.comment
    };
    this.userService.addReview(data).subscribe({
      next: (res) => {
        if (res.result == 1) {
          console.log(res);
        }
      },
      error: (error) => {
        console.log(error);
      }
    });
    console.log(this.star);
  }

  allReviews(data: any) {
    return this.userService.getAllReviews(data.id).subscribe({
      next: (res) => {
        this.allreviews = res.data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  addToCart(data: any) {
    console.log(data);
    let payload = {
      "product_id": data.id
    };
    return this.userService.addToWishlist(payload).subscribe({
      next: (res) => {
        let data = {
          "cat_id": this.cat_id
        };

        this.getProducts(data);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
