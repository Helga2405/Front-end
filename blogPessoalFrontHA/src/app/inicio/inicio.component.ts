import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      //alert('Sua sessão expirou! Logue novamente, por favor.')
      this.router.navigate(["/entrar"])
    }
  }

}
