import { Router } from '@angular/router';
import { UserserviceService } from './../../services/userservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart:any=[];
  constructor(private userservice:UserserviceService,private router:Router){}

  ngOnInit(): void {
    this.getCarts();
  }
  logout()
  {
     console.log('logout');
     this.userservice.logout().subscribe({
      next:(res)=>{
          if(res.result == "logout")
            {
              sessionStorage.clear();
              this.router.navigateByUrl('/user')
            }
      },
      error:(error)=>{
        console.log(error);
      }
     })
  }

  getCarts()
  {
     return this.userservice.getCartItems().subscribe({
      next:(res)=>{
        this.cart = res.result;
          console.log(this.cart);
      },
      error:(error)=>{
          console.log(error);
      }
     })
  }

}
