import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {

  otherdetails:boolean = false;
  namecontact:boolean = true;
  birthdate:boolean = false;

  constructor(private spinner: NgxSpinnerService)
  {
    this.spinner.show();
    setTimeout(() => {
     /** spinner ends after 5 seconds */
     this.spinner.hide();
   }, 5000);
  }

  updateName(newName: any) {
    this.namecontact = newName;
    if(newName == false)
      {
        this.birthdate = true;
      }else{
        this.birthdate = false;
      }
  }

  updateBirth(newName: any) {
    this.birthdate = false;
    if(newName == false)
      {
        this.otherdetails = true;
        this.namecontact = false;
      }else{
        this.otherdetails = false;
        this.namecontact = true;
      }
  }

  updateOther(newName: any) {
    this.otherdetails = false;
    if(newName == false)
      {
        this.birthdate = true;
        this.namecontact = false;
      }else{
        this.birthdate = false;
        this.namecontact = true;
      }
  }

}
