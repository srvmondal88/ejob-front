import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
 login:any;
 lerror:any='';
 passWrd:any='password';
  constructor(private userService: LoginService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
     this.login={
      email:"",
      password:""
     }
  }
  onSubmit(loginform) {
    this.spinner.show();

    this.userService.login(loginform.value).subscribe({
      next: (res: any) => {
        console.log(res.result);

        if (res.isLogged) {
          sessionStorage.setItem('userdetails', JSON.stringify(res.result));
          window.location.href = "http://localhost:4200/user/dashboard";
        }else{
           this.lerror="Unauthorized";
        }

      },
      error: (error) => {
        console.log(error);
      }
    })
    console.log(loginform.value);
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

  showPass(n:any)
  {
    let pass = n.checked;
    this.passWrd = pass?'text':'password';
    console.log(this.passWrd);
  }
}
