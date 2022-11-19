import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { CommunicationService } from 'src/Services/communication.sevices';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userForm:FormGroup; 
  crm: string= '';

  password: string= '';

  constructor(
    private commservice : CommunicationService,
    private dialogRef: MatDialogRef<LoginComponent>,
    private fb: FormBuilder
    ) {
      this.userForm = this.fb.group({
        crm: '',
        password: ''
      });
  
     }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close()
  }

  setCrm(event: any) {
    this.crm = event.target.value;
  }

  setPassword(event: any) {
    this.password = event.target.value;
  }

  login(): void {
    this.crm = this.userForm.get('crm')?.value; 
    this.password = this.userForm.get('password')?.value; 
    this.commservice.login(this.crm).subscribe(
      (res) => console.log(res)
    )
    this.close()
  }

}
