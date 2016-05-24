System.register(['angular2/core', './components/navbar/navbarComponent', './components/tiles/tilesComponent', './components/map/mapComponent'], function(exports_1, context_1) {
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
    var core_1, navbarComponent_1, tilesComponent_1, mapComponent_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (navbarComponent_1_1) {
                navbarComponent_1 = navbarComponent_1_1;
            },
            function (tilesComponent_1_1) {
                tilesComponent_1 = tilesComponent_1_1;
            },
            function (mapComponent_1_1) {
                mapComponent_1 = mapComponent_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.selectedView = 'tiles';
                }
                AppComponent.prototype.onToggle = function (toggleTo) {
                    this.selectedView = toggleTo;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'map-designer',
                        templateUrl: 'templates/components/appcomponent.html',
                        directives: [navbarComponent_1.NavbarComponent, tilesComponent_1.TilesComponent, mapComponent_1.MapComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map