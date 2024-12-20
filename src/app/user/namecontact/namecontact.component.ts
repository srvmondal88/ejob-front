import { NgxSpinnerService } from 'ngx-spinner';
import { UserserviceService } from './../services/userservice.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-namecontact',
  templateUrl: './namecontact.component.html',
  styleUrls: ['./namecontact.component.css']
})
export class NamecontactComponent implements OnInit {
  @Output() nameChange = new EventEmitter<any>();

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
  next1(fn: any, ln: any, e: any, i: any) {
    let payload = {
      firstname: fn,
      lastname: ln,
      phone: i
    };
    return this.userService.saveUserdetails(payload).subscribe({
      next: (res) => {

        console.log(res);
        // console.log(fn, ln, e, i);
        this.nameChange.emit(false);
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
