import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  statusForm: boolean = false
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      commentary: ['', [Validators.required]]
    });

  }

  save(event: Event) {
    event.preventDefault();
    debugger
    const value = this.form.value;
    console.log(value);
  }

  get nameField() {
    return this.form.get('name')
  }
  get emailField() {
    return this.form.get('email')
  }
  get phoneField() {
    return this.form.get('phone')
  }
  get commentaryField() {
    return this.form.get('commentary')
  }

  changeBtn() {
    this.statusForm = false
  }

}
