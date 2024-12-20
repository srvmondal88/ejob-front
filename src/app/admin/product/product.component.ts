import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any = [];
  selid: any = [];
  p: any = 1;
  count: any = 5;
  ifStatus: boolean = true;
  selectAll: boolean = true;

  @ViewChild('selectAllCheckbox', { static: false }) selectAllCheckbox: ElementRef;
  constructor(private adminService: AdminService, private spinner: NgxSpinnerService,private renderer: Renderer2) { }

  ngOnInit(): void {

    this.getAllProducts();
  }

  getAllProducts() {

    this.spinner.show();
    this.adminService.getProducts().subscribe({
      next: (res: any) => {
        this.products = res.result;
        console.log(res);

      },
      error: (error) => {
        console.log(error);
      },
    })

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

  chkval(n: any) {
    console.log(n.target.checked);
    if (n.target.checked) {
      this.selid.push(n.target.value)
    } else {

      const index = this.selid.indexOf(n.target.value);

      this.selid.splice(index, 1);

    }
    if (this.selid.length > 0) {
      this.ifStatus = false;
    } else {
      this.ifStatus = true;
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

        if (res.status == 1) {
          this.getAllProducts();
          this.selid = [];
          (document.querySelector('#sleAll') as HTMLInputElement).checked = false;
        }
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  toggleSelectAll() {
    // this.products.forEach(item => item.selected = this.selectAll);
    // this.ifStatus = !this.selectAll;
    // this.selectAll = !this.selectAll;

    const elements = document.querySelectorAll('.trigger-click');

    // Loop through all elements and trigger the click event
    elements.forEach((element: HTMLElement) => {
      element.click(); // Trigger the click event on each element
    });

  }

}
