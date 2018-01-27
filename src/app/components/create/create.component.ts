// create.component.ts

import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../share.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;
  constructor(private shareservice: ShareService, private fb: FormBuilder) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ]
   });
  }
  addShare(name, price) {
    const dataObj = {
      name: name,
      price: price
    };
    this.shareservice.addShare(dataObj);
  }
  ngOnInit() {
  }
}
