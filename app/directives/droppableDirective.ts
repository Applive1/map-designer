import {Directive, ElementRef, Inject, Injectable, Input, Output, EventEmitter} from 'angular2/core';

@Directive({
    selector: '[droppable]',
    host: {
        '(dragover)' : 'onDragOver($event)',             
        '(dragleave)': 'onDragLeave($event)',
        '(dragenter)': 'onDragEnter($event)',
        '(drop)': 'onDrop($event)'
    }
})
@Injectable()
export class DroppableDirective {

    private originalClass: string;
    @Input() dragClass: string;
    @Input() dropClass: string;

    @Output() dropped = new EventEmitter<string>(); 

    constructor(@Inject(ElementRef) private element: ElementRef) {
        console.log(this.element);
        this.originalClass = this.element.nativeElement.className;
    }

    private onDragOver(ev){
        //console.log(ev);        
        ev.stopPropagation();
        ev.preventDefault();
        return false;
    }

    private onDragEnter(ev) {
        // console.log(ev);
        // ev.stopPropagation();
        // ev.preventDefault();       
        this.element.nativeElement.className += ' ' + this.dragClass;
    }

    private onDragLeave(ev) {
        // console.log(ev);
        // ev.stopPropagation();
        // ev.preventDefault();       
        // Check if there was drop. Emit event?
        this.element.nativeElement.className = this.originalClass;
    }

    private onDrop(ev) {
        // Emit drop event
        ev.stopPropagation();
        ev.preventDefault();

        let dt = ev.dataTransfer;
        let files = dt.files;

        this.dropped.emit(files);

        this.element.nativeElement.className = this.originalClass += ' ' + this.dropClass;
        
    }
}