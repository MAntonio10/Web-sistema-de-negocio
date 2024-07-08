import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router){}
//al iniciar la pagina
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['',Validators.required],
      secondName: ['',Validators.required],
      lastName: ['',Validators.required],
      secondlastName: ['',Validators.required],
      email: ['',Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
//ocultar y mostrar la contraseña
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSignup(){
    if(this.signupForm.valid){

      console.log(this.signupForm.value)
      //Envía el objeto a la base de datos

      this.auth.signup(this.signupForm.value)
      .subscribe({
        next:(res=>{

          this.signupForm.reset();
          this.router.navigate(["/login"]);
        })
        ,error:(err=>{
        })
      })

    }else{
      console.log("Formulario Inválido");

      ValidateForm.validateAllFormFileds(this.signupForm);
    }
  }

}
