import { Component,EventEmitter,OnInit,Output } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-otherdetails',
  templateUrl: './otherdetails.component.html',
  styleUrls: ['./otherdetails.component.css']
})
export class OtherdetailsComponent implements OnInit {
  @Output() otherDetails = new EventEmitter<any>();

  data:any;
  constructor(private userService:UserserviceService,private spinner: NgxSpinnerService){}

  ngOnInit(): void {
    this.spinner.show();
    this.getDetails();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }
  prev3()
  {
    this.otherDetails.emit(false);
  }

  getDetails()
  {
     return this.userService.getUserDetails().subscribe({
       next:(res) =>{
        this.data = res.data;
         console.log(res);
       },
       error:(error) =>{
         console.log(error);
       }
     });
  }
  submit()
  {
      let payload = {
        "other_details": this.data.other_details,
        "favourites": this.data.favourites
      };

      this.userService.submitOtherDetails(payload).subscribe({
          next:(res) =>{
            Swal.fire("User details submitted successfully");
             console.log(res);
          },
          error:(err) => {
            console.log(err);
          }
      });
  }
}
