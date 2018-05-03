import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'my application';
	author = 'Carlos Botero';
	count = 0;
	imgSource = './../favicon.ico';
	inputEnabled: boolean = true;
}
