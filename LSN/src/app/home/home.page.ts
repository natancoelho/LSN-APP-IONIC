import { Component, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
 templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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