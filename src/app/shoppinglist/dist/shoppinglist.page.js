"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShoppinglistPage = void 0;
var core_1 = require("@angular/core");
var ShoppinglistPage = /** @class */ (function () {
    function ShoppinglistPage(router) {
        this.router = router;
        this.note = 'There are no items here';
        this.btnClick1 = function () {
            this.router.navigateByUrl('/stock');
        };
        this.btnClick2 = function () {
            this.router.navigateByUrl('/shoppinglist');
        };
        this.btnClick3 = function () {
            this.router.navigateByUrl('/expiry');
        };
    }
    ShoppinglistPage.prototype.ngOnInit = function () {
    };
    ShoppinglistPage.prototype.showData = function ($event) {
        console.log("button is clicked!");
        if ($event) {
            console.log($event.target);
            console.log($event.target.value);
        }
    };
    ShoppinglistPage = __decorate([
        core_1.Component({
            selector: 'app-shoppinglist',
            templateUrl: './shoppinglist.page.html',
            styleUrls: ['./shoppinglist.page.scss']
        })
    ], ShoppinglistPage);
    return ShoppinglistPage;
}());
exports.ShoppinglistPage = ShoppinglistPage;
