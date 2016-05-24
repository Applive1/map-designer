import {Component, EventEmitter, Output } from 'angular2/core';
import {NavButton} from './navbutton';

@Component({
	selector: 'navbar',
	templateUrl: 'templates/components/navbar/navbar.html',
	directives: [NavButton]

})
export class NavbarComponent {

	private selected: string = 'tiles';
	@Output() onToggle = new EventEmitter<string>();	

	// Toggles the value of the navbar
	public toggle(toggleTo:string){
		this.onToggle.emit(toggleTo);
		this.selected = toggleTo;
	}

}