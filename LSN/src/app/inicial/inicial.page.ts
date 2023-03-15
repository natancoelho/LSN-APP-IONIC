import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
})
export class InicialPage {
  constructor(private route: Router) { }

  perfil() {
    this.route.navigate(['/perfil']);
  }
  home() {
    this.route.navigate(['/inicial']);
  }
  atividade() {
    this.route.navigate(['/atividade']);
  }
}
