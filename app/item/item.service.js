"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemService = (function () {
    function ItemService() {
        this.items = [
            { id: 1, name: "Ira", role: "Developer" },
            { id: 2, name: "Feya", role: "Developer" },
            { id: 3, name: "Anleo", role: "Developer" },
            { id: 4, name: "Koralex", role: "Developer" },
            { id: 5, name: "Dimon", role: "Developer" }
        ];
    }
    ItemService.prototype.getItems = function () {
        return this.items;
    };
    ItemService.prototype.getItem = function (id) {
        return this.items.find(function (item) { return item.id === id; });
    };
    ItemService.prototype.addItem = function (item) {
        item.id = this.items.length + 1;
        this.items.push(item);
    };
    return ItemService;
}());
ItemService = __decorate([
    core_1.Injectable()
], ItemService);
exports.ItemService = ItemService;
