import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//**//
import { FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms'; //fixed that
//**//
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule ]//<==
})
export class ContactPage implements OnInit {
  //**//
  contactPage = new FormGroup({});
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.contactPage.addControl('phone', new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{10}$')]));
  }
  
  onSubmit() {
    console.log(this.contactPage.value);
  }
}
