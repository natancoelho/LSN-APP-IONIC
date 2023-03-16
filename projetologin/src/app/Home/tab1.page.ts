import { AuthenticationService } from './../services/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
	constructor(private authService: AuthenticationService, private route: Router) {}

	async logout() {
		await this.authService.logout();
		this.route.navigateByUrl('/', { replaceUrl: true });
	}
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
