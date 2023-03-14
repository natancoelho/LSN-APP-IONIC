import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.page.html',
  styleUrls: ['./atividade.page.scss'],
})
export class AtividadePage {
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