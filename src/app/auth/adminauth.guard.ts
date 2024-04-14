import { CanActivateFn,Router } from '@angular/router';
import {inject} from "@angular/core";

export const adminauthGuard: CanActivateFn = (route, state) => {

  let token = JSON.parse(sessionStorage.getItem('admindetails'));
  // console.log(token.token);
  if(token)
  {
  return true;
  }else{
    // return false;
    return inject(Router).createUrlTree(['/admin/admin-login']);
  }
};
