import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: any = [];

  constructor(private adminservice: AdminService,private spinner: NgxSpinnerService) { }
  ngOnInit(): void {
     this.getAllcategories();
  }

  getAllcategories() {
    this.spinner.show();
    this.adminservice.getAllcategroies().subscribe({

      next: (res: any) => {
        this.category = res.result;
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

  chngst(id:any,st:any)
  {
      console.log(id)
      let sta= 0;
      if(st ==1)
      {
          sta = 2;
      }else{
          sta =1;
      }
      let payload = {
        "status": sta
      }
      this.adminservice.chngCatSt(id,payload).subscribe({
         next:(res:any) =>{
            console.log(res)
            if(res.result ==1 && res.status == 1)
            {
              this.getAllcategories();
            }
         },
         error:(error) =>{
            console.log(error)
         }
      })
  }
}
