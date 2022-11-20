import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { CommunicationService } from 'src/Services/communication.sevices';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { catchError,map, tap } from 'rxjs';


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
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
    ) {
      this.userForm = this.fb.group({
        crm: '',
        password: ''
      });
  
     }

  private handleError(errors: any): Promise<any> {
    //console.error('An error occurred', errors);
    this._snackBar.open('Login incorreto!!!', undefined , {duration: 2000})
    //alert('Error occurred ' + errors.message);
    return Promise.reject(errors.message || errors);
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
    this.commservice.login(this.crm)
    .pipe (catchError(err =>  this.handleError(err)))
    .subscribe(
      (res) => {
        if (res.status == 200) {
          this.dialogRef.close(true);
        }
      })
  }

}
