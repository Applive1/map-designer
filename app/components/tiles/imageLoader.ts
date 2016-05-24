import {Component, Input} from 'angular2/core';

@Component({
	selector: 'image-loader',
	templateUrl: 'templates/components/tiles/imageloader.html',
	directives: []

})
export class ImageLoaderComponent {

	@Input() src: File;

	private paintSrc(){
		var reader = new FileReader();
		reader.readAsDataURL(this.src);
	}
}