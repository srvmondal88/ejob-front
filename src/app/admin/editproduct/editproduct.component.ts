import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  addProduct: any;
  product: any;
  categories: any = [];

  constructor(private fb: FormBuilder, private actroute: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit(): void {

    let id = this.actroute.snapshot.params['id'];
    console.log(id);
    this.getProductById(id);
    this.getAllCategory();

    this.addProduct = this.fb.group({

      category: ['', [Validators.required]],
      name: ['', [Validators.required]],
      sku: ['', [Validators.required]],
      price: ['', [Validators.required]],
      color: ['', [Validators.required]],
      file: ['', [Validators.required]],
      image: ['']
    })
  }

  get f() {
    return this.addProduct.controls;
  }
  getProductById(id: any) {
    return this.adminService.getproductById(id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.product = res.result[0];
      },
      error: (error) => {
        console.log(error);
      }
    })
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
  getAllCategory() {
    this.adminService.getAllcategroies().subscribe({
      next: (res: any) => {
        this.categories = res.result;
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  submit() {
    console.log(this.addProduct.value);
  }
}
