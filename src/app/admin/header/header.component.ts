import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private adminService: AdminService, private router: Router) { }

  logout() {
    this.adminService.adminLogout().subscribe({
      next: (res: any) => {
        if (res.status == 1) {
          sessionStorage.clear();
          this.router.navigateByUrl('/admin/admin-login');
        }
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
