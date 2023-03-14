import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage  {
  constructor(private route: Router) { }

  perfil() {
    this.route.navigate(['/perfil']);
  }
  home() {
    this.route.navigate(['/home']);
  }
  atividade() {
    this.route.navigate(['/atividade']);
  }
}

