import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private userService: LoginService) { }
  onSubmit(loginform) {
    this.userService.login(loginform.value).subscribe({
      next: (res: any) => {
        console.log(res.result);

        if (res.isLogged) {
          sessionStorage.setItem('userdetails', JSON.stringify(res.result));
          window.location.href = "http://localhost:4200/user/dashboard";
        }

      },
      error: (error) => {
        console.log(error);
      }
    })
    console.log(loginform.value);
  }
}
