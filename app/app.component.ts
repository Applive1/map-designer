import { Component } from 'angular2/core';
import { NavbarComponent } from './components/navbar/navbarComponent';
import { TilesComponent } from './components/tiles/tilesComponent';
import { MapComponent } from './components/map/mapComponent';

@Component({
	selector: 'map-designer',
	templateUrl: 'templates/components/appcomponent.html',
	directives: [NavbarComponent, TilesComponent, MapComponent]

})
export class AppComponent {

	private selectedView: string = 'tiles';

	public onToggle(toggleTo: string) {
		this.selectedView = toggleTo;
	}

}