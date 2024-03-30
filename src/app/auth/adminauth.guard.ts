import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const adminauthGuard: CanActivateFn = (route, state) => {

  let token = JSON.parse(sessionStorage.getItem('admindetails'));
  // console.log(token.token);
  if(token)
  {
  return true;
  }else{
    return false;
  }
};
