import { AdminService } from 'src/app/services/admin.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order: any = [];
  p: any = 1;
  count: any = 5;
  constructor(private adminService: AdminService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

    this.getAllOrders();

  }

  getAllOrders() {

    this.spinner.show();
    return this.adminService.getAllOrders().subscribe({
      next: (res: any) => {
        this.order = res.result;
        console.log(this.order)
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 5000);
      },
      error: (error) => {
        console.log(error)
      }
    })

  }

}
