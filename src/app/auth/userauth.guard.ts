import { CanActivateFn,Router } from '@angular/router';
import {inject} from "@angular/core";
import { UserserviceService } from '../user/services/userservice.service';

export const userauthGuard: CanActivateFn = (route, state) => {

  const authService =  inject(UserserviceService);

  if (authService.isLoggedIn()) {
    // console.log(authService.isLoggedIn());
    return true; // If logged in, allow access to the route
  } else {
    return inject(Router).createUrlTree(['/user']); // If not logged in, deny access to the route
  }

};
