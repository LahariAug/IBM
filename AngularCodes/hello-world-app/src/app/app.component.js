"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.totalStyles = {
            color: "yellow",
            fontStyle: "italic"
        };
        this.isDisabled = false;
        this.highlightedColour = "blue";
        this.title = 'hello';
        this.name = 'user12';
        this.successClass = 'text-danger';
        this.hasError = false;
        this.greeting = " ";
        this.isItalic = true;
        this.messageClasses = {
            "text-success": !this.hasError,
            "text-danger": this.hasError,
            "text-special": this.isItalic
        };
    }
    AppComponent.prototype.greetUser = function () {
        return this.title + 'coders';
    };
    AppComponent.prototype.onClick = function ($event) {
        // console.log(event);
        console.log(event.type);
        this.greeting = "welcome to coding world";
    };
    AppComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-root',
            // templateUrl: './app.component.html',
            template: "\n  <p class=\"text-special\" > {{name}}</p>\n  <h2>\n \n  <input type=\"text\"  bind-value = name />\n  <p class = \"text-special\"   [class] =\"successClass\">hello team demo css is here</p>\n  <p [class.text-danger] = \"hasError\"> solution </p>\n  <h2 [ngClass] =\"messageClasses\"> ngclassDemo </h2>\n<h2    [style.color] = \"'orange'\"> styles demo 1  </h2>\n<h2    [style.color] = \"hasError ? 'red' : 'pink'\"> styles demo 2  </h2>\n<h2 [style.color] = \"highlightedColour\"> component class binding</h2>\n<h2 [ngStyle]=\"totalStyles\">final example</h2>\n  </h2>\n  <button (click) = \"onClick($event)\" >GREET</button>\n  ",
            //inline
            // styleUrl: ['./app.component.css']
            styles: ["\n   .text-success{background-color:green}\n   .text-danger{background-color:red;}\n   .text-special{ font-style: italic}\n   "]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
