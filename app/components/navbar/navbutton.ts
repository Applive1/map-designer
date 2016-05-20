import { Component, Input } from 'angular2/core';
import { Options} from '../../model/optionsEnum';

@Component({
	selector: 'nav-button',
	templateUrl: 'templates/components/navbar/navbutton.html',	
})
export class NavButton {
	@Input() isActive: boolean;
	@Input() text: string;
}