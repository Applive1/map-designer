import { Component } from 'angular2/core';
import { Options} from './model/optionsEnum';
import {DropletComponent} from './components/droplet';
import {NavButton} from './components/navbar/navbutton';

@Component({
	selector: 'map-designer',
	templateUrl: 'templates/components/appcomponent.html',
	directives: [DropletComponent, NavButton]

})
export class AppComponent { 

	private selectedView: Options = Options.Tiles;

}