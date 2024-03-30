import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  addCategory = this.fb.group({
    name:[''],
    sku:['']
   })

  constructor(private adminSrvice:AdminService,private router:Router,private fb:FormBuilder){}

   ngOnInit(): void {
    // console.log(this.addCategory.value);
   }

   submit(){
    console.log(this.addCategory.value);

    this.adminSrvice.addcategory(this.addCategory.value).subscribe({
      next: (res: any) => {

        console.log(res);
        this.router.navigateByUrl('/admin/categories');

      },
      error: (error) => {
        console.log(error);
      },
    })
   }
}
