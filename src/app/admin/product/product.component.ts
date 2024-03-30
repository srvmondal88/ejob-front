import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any = [];
  selid: any = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.adminService.getProducts().subscribe({
      next: (res: any) => {
        this.products = res.result;
        console.log(res);

      },
      error: (error) => {
        console.log(error);
      },
    })
  }

  chkval(n: any) {
    console.log(n.target.checked);
    if (n.target.checked) {
      this.selid.push(n.target.value)
    } else {

      const index = this.selid.indexOf(n.target.value);

      this.selid.splice(index, 1);

    }
    console.log(this.selid);
  }

  chngst(e: any) {
    let id = e.target.value;
    console.log(id);
    let payload = {
      "ids": this.selid
    }
    this.adminService.chngStatus(id, payload).subscribe({
      next: (res) => {
        console.log(res)

        if(res.status == 1)
        {
          this.getAllProducts();
          this.selid = [];
        }
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
