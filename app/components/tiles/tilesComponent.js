System.register(['angular2/core', './imageLoader', './../../directives/droppableDirective'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, imageLoader_1, droppableDirective_1;
    var TilesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (imageLoader_1_1) {
                imageLoader_1 = imageLoader_1_1;
            },
            function (droppableDirective_1_1) {
                droppableDirective_1 = droppableDirective_1_1;
            }],
        execute: function() {
            TilesComponent = (function () {
                function TilesComponent() {
                }
                // Invokes the server for the cropping script --> Observable?
                TilesComponent.prototype.crop = function () {
                    console.log('Invoke crop:', this.imageFile);
                };
                TilesComponent.prototype.onFileDrop = function (imageFile) {
                    console.log(imageFile);
                    this.imageFile = imageFile;
                };
                TilesComponent = __decorate([
                    core_1.Component({
                        selector: 'tiles-view',
                        templateUrl: 'templates/components/tiles/tilesview.html',
                        directives: [imageLoader_1.ImageLoaderComponent, droppableDirective_1.DroppableDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TilesComponent);
                return TilesComponent;
            }());
            exports_1("TilesComponent", TilesComponent);
        }
    }
});
//# sourceMappingURL=tilesComponent.js.map