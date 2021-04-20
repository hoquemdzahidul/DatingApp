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
  constructor( private authService : AuthService) { }

  ngOnInit() {
  }



  cancel()
  {

    this.cancelRegister.emit(false);


  }

  register()
  {
    this.authService.register(this.model).subscribe(()=>{
      console.log('Registration has been successfully completed.');
    }, error => {
      console.log(error);
    })
  }

}
