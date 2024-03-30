import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit{

  addProduct: any;
  categories:any = [];

  constructor(private fb: FormBuilder,private adminService: AdminService,private router: Router) { }

  ngOnInit(): void {

     this.addProduct = this.fb.group({

      category: ['',[Validators.required]],
      name: ['',[Validators.required]],
      sku :['',[Validators.required]],
      price: ['',[Validators.required]],
      color :['',[Validators.required]],
      file : ['',[Validators.required]],
      image : ['',[Validators.required]]
     })

     this.getAllCategory();
  }

  get f(){
    return this.addProduct.controls;
  }

  onFileChange(event) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.addProduct.patchValue({
        image: file
      });
    }
  }

  // ---------- get categories ----------------------
  getAllCategory()
  {
     this.adminService.getAllcategroies().subscribe({
      next:(res:any) =>{
        this.categories = res.result;
        console.log(res);
      },
      error: (error) => {
         console.log(error);
      }
     })
  }

  submit(){
     console.log(this.addProduct.value);

     this.adminService.addProduct(this.addProduct.value).subscribe({
      next: (res: any) => {

        console.log(res);
        this.router.navigateByUrl('/admin/products');

      },
      error: (error) => {
        console.log(error);
      },
     })
  }


}
