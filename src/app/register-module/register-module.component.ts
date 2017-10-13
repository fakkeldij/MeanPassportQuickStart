import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-module',
  templateUrl: './register-module.component.html',
  styleUrls: ['./register-module.component.css']
})
export class RegisterModuleComponent {

 form;


  ngOnInit(){ 
    
          this.form = new FormGroup({
            firstname: new FormControl("", Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.pattern('[\\w\\-\\s\\/]+')
            ])),
            lastname: new FormControl("", this.textValidator),
            languages: new FormControl("")
            
          });
        }
        
        textValidator(control) {
          if(control.value.length < 3) 
          { return {'lastname': true};
          }
          
        }
        onSubmit = function(user) {
          console.log(user);
          
        }
        }
        
    