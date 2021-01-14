import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


  loginForm = this.fb.group({
    username: [null],
    password: [null]
  });


  constructor(
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      mobileNo: new FormControl('+947', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  get form() {
    return this.loginForm.controls;
  }


  onSubmit() {
    this.router.navigate(['home']);
  }


}
