import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:FormGroup;
  constructor(private adminService: AdminService,private router: Router) { }

   ngOnInit(): void {

      //  this.adminService.login().subscribe((res)=>{
      //      console.log(res);
      //  })
      this.login = new FormGroup({
        email:new FormControl('', [Validators.required]),
         password:new FormControl('', [Validators.required]),
      });
   }

   get f(){
    return this.login.controls;
  }
  submit()
  {
    // console.log(this.login.value);
    this.adminService.login(this.login.value).subscribe((res)=>{
        // console.log(res.status);
        if(res.status == 1 && res.isLogged == true)
        {
          let admindeatils = res.result;
          console.log(admindeatils);
          sessionStorage.setItem('admindetails',  JSON.stringify(admindeatils));

          // this.router.navigate(['admin/dashboard']);

          window.location.href="http://localhost:4200/admin/dashboard";
        }
    })
  }
}
