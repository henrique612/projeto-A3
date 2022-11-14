import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {
  isLogged: Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  login(): void {
    this.isLogged = true
  }
}
