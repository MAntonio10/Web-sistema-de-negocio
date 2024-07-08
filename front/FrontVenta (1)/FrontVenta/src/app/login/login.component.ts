import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onLogin(){

    if(this.loginForm.valid){

      console.log(this.loginForm.value)
      //Envía el objeto a la base de datos

      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res=>{
          this.loginForm.reset();
          this.router.navigate(['/menu']);
        })
        ,error:(err=>{
        })
      })

    }else{
      console.log("Formulario Inválido");

      ValidateForm.validateAllFormFileds(this.loginForm);
    }
  }
}
