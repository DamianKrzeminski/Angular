import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  hideRequiredControl = new FormControl(false);

  applicationForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    gender: new FormControl('male'),
    formOfRecrutation: new FormControl('teams'),
    extraInfo: new FormControl(''),
    accept: new FormControl(''),
  });

  onSubmit(){
    console.log(this.applicationForm.value);
  }
  
}

