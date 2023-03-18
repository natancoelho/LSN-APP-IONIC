import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(private route: Router) { }

  perfil() {
    this.route.navigate(['/perfil']);
  }
  home() {
    this.route.navigate(['/inicial']);
  }
  pagamentos() {
    this.route.navigate(['/tabs/pagamentos']);
  }
  pass() {
    this.route.navigate(['/tabs/lsnpass']);
  }
}
