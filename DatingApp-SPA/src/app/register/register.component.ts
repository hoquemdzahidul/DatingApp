import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model : any = {};
  @Input() valuesFromHome : any;
  @Output() cancelRegister = new EventEmitter();
  constructor( private authService : AuthService, private alertify : AlertifyService) { }

  ngOnInit() {
  }



  cancel()
  {

    this.cancelRegister.emit(false);


  }

  register()
  {
    this.authService.register(this.model).subscribe(()=>{
      this.alertify.success('Registration has been successfully completed.');
    }, error => {
      this.alertify.error(error);
    });
  }

}
