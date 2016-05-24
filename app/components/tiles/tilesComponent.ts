import {Component} from 'angular2/core';
import {ImageLoaderComponent} from './imageLoader';
import {DroppableDirective} from './../../directives/droppableDirective';

@Component({
	selector: 'tiles-view',
	templateUrl: 'templates/components/tiles/tilesview.html',
	directives: [ImageLoaderComponent, DroppableDirective]
})
export class TilesComponent {

	private imageFile: string;

	// Invokes the server for the cropping script --> Observable?
	public crop(){
		console.log('Invoke crop:', this.imageFile);
	}

	public onFileDrop(imageFile:string){
		console.log(imageFile);
		this.imageFile = imageFile;
	}
}