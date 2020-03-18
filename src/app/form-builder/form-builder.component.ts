import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  empForm : FormGroup
  constructor(private fb: FormBuilder ) { }

  ngOnInit() {
    this.empForm = this.fb.group({
      firstName:['', Validators.required, Validators.maxLength, Validators.max(1000), ]
    })
  }

}
