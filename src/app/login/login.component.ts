import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { CommunicationService } from 'src/Services/communication.sevices';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  crm: string = '';

  constructor(private commservice : CommunicationService,private dialogRef: MatDialogRef<LoginComponent>,
    ) { }

  ngOnInit(): void {
  }

close(): void {
    this.dialogRef.close()
  }

  login(): void {
    this.commservice.login(this.crm)
  }

}
