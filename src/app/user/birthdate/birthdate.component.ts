import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-birthdate',
  templateUrl: './birthdate.component.html',
  styleUrls: ['./birthdate.component.css']
})
export class BirthdateComponent implements OnInit {
  @Output() birthDate = new EventEmitter<any>();
   data:any;
  constructor(private userService: UserserviceService,private spinner: NgxSpinnerService) {

  }

  ngOnInit(): void {
    this.spinner.show();
   this.getUserdetails();

   setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 5000);
  }
  next2(b:any,q:any)
  {
    let payload ={
      "birthdate":b,
      "quote":q
    };
    return this.userService.saveBirthDetails(payload).subscribe({
         next:(res) => {
          console.log(res);
          this.birthDate.emit(false);
         },
         error: (error) => {
           console.log(error.errors);
           let errors = error.errors;

           Object.keys(errors).forEach(key => {
             errors[key].forEach(message => {
                 console.log(`${key}: ${message}`);
                 $('#err_'+key).html(message);
             });
         });
         }
    })

  }
  prev2()
  {
    this.birthDate.emit(true);
  }

  getUserdetails()
  {
    return this.userService.getUserDetails().subscribe({
      next:(res)=>{
          this.data = res.data;
      },
      error: (error)=>{
          console.log(error);
      }
    })
  }
}
