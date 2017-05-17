"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var router_1 = require("@angular/router");
var ItemsComponent = (function () {
    function ItemsComponent(itemService, router) {
        this.itemService = itemService;
        this.router = router;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
    };
    ItemsComponent.prototype.create = function () {
        // this.router.navigate(['/create'])
        console.log('ggggggggggg');
    };
    return ItemsComponent;
}());
ItemsComponent = __decorate([
    core_1.Component({
        selector: "ns-items",
        moduleId: module.id,
        templateUrl: "items.component.html",
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService,
        router_1.Router])
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
