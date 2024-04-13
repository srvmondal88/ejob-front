import { Router } from '@angular/router';
import { UserserviceService } from './../../services/userservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private userservice:UserserviceService,private router:Router){}

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

}
