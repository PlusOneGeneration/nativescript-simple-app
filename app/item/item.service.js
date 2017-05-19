"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var local_storage_service_1 = require("../local-storage.service");
var ItemService = (function () {
    function ItemService(localStorageService) {
        this.localStorageService = localStorageService;
        // private items: Item[] = [
        //     {id: 1, name: "Ira", phone: 111},
        //     {id: 2, name: "Feya", phone: 22},
        //     {id: 3, name: "Anleo", phone: 33},
        //     {id: 4, name: "Koralex", phone: 44},
        //     {id: 5, name: "Dimon", phone: 55}
        // ];
        this.items = [];
    }
    ItemService.prototype.getLocalStorageItems = function () {
        return JSON.parse(this.localStorageService.getItem('Person list'));
    };
    ItemService.prototype.addLocalStorageItem = function () {
        this.localStorageService.clear();
        this.localStorageService.addItem('Person list', JSON.stringify(this.items));
    };
    ItemService.prototype.getItems = function () {
        return this.items = this.getLocalStorageItems() ? this.getLocalStorageItems() : [];
    };
    ItemService.prototype.getItem = function (id) {
        return this.items.find(function (item) { return item.id === id; });
    };
    ItemService.prototype.addItem = function (item) {
        item.id = this.items.length ? this.items.length + 1 : 1;
        this.items.push(item);
        this.addLocalStorageItem();
    };
    ItemService.prototype.deleteItem = function (item) {
        this.items = this.items.filter(function (_item) { return _item.id !== item.id; });
        this.addLocalStorageItem();
    };
    ItemService.prototype.editItem = function (item) {
        var _item = this.getItem(item.id);
        _item = item;
        this.addLocalStorageItem();
    };
    ItemService.prototype.save = function (item) {
        item.id ? this.editItem(item) : this.addItem(item);
    };
    return ItemService;
}());
ItemService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [local_storage_service_1.LocalStorageService])
], ItemService);
exports.ItemService = ItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLGtFQUE2RDtBQUk3RCxJQUFhLFdBQVc7SUFXcEIscUJBQXFCLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBVjdELDRCQUE0QjtRQUM1Qix3Q0FBd0M7UUFDeEMsd0NBQXdDO1FBQ3hDLHlDQUF5QztRQUN6QywyQ0FBMkM7UUFDM0Msd0NBQXdDO1FBQ3hDLEtBQUs7UUFFTCxVQUFLLEdBQVcsRUFBRSxDQUFDO0lBR25CLENBQUM7SUFFRCwwQ0FBb0IsR0FBcEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELHlDQUFtQixHQUFuQjtRQUNJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBQy9FLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ3ZGLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsRUFBVTtRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsSUFBVTtRQUNkLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtJQUM5QixDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLElBQVU7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCw4QkFBUSxHQUFSLFVBQVMsSUFBVTtRQUNmLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsMEJBQUksR0FBSixVQUFLLElBQVU7UUFDWCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBcERELElBb0RDO0FBcERZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtxQ0FZaUMsMkNBQW1CO0dBWHBELFdBQVcsQ0FvRHZCO0FBcERZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQge0xvY2FsU3RvcmFnZVNlcnZpY2V9IGZyb20gXCIuLi9sb2NhbC1zdG9yYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7SXRlbX0gZnJvbSBcIi4vaXRlbVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSXRlbVNlcnZpY2Uge1xuICAgIC8vIHByaXZhdGUgaXRlbXM6IEl0ZW1bXSA9IFtcbiAgICAvLyAgICAge2lkOiAxLCBuYW1lOiBcIklyYVwiLCBwaG9uZTogMTExfSxcbiAgICAvLyAgICAge2lkOiAyLCBuYW1lOiBcIkZleWFcIiwgcGhvbmU6IDIyfSxcbiAgICAvLyAgICAge2lkOiAzLCBuYW1lOiBcIkFubGVvXCIsIHBob25lOiAzM30sXG4gICAgLy8gICAgIHtpZDogNCwgbmFtZTogXCJLb3JhbGV4XCIsIHBob25lOiA0NH0sXG4gICAgLy8gICAgIHtpZDogNSwgbmFtZTogXCJEaW1vblwiLCBwaG9uZTogNTV9XG4gICAgLy8gXTtcblxuICAgIGl0ZW1zOiBJdGVtW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgIGxvY2FsU3RvcmFnZVNlcnZpY2U6IExvY2FsU3RvcmFnZVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBnZXRMb2NhbFN0b3JhZ2VJdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEl0ZW0oJ1BlcnNvbiBsaXN0JykpO1xuICAgIH1cblxuICAgIGFkZExvY2FsU3RvcmFnZUl0ZW0oKSB7XG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5jbGVhcigpO1xuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuYWRkSXRlbSgnUGVyc29uIGxpc3QnLCBKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW1zKSlcbiAgICB9XG5cbiAgICBnZXRJdGVtcygpOiBJdGVtW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcyA9IHRoaXMuZ2V0TG9jYWxTdG9yYWdlSXRlbXMoKSA/IHRoaXMuZ2V0TG9jYWxTdG9yYWdlSXRlbXMoKSA6IFtdO1xuICAgIH1cblxuICAgIGdldEl0ZW0oaWQ6IG51bWJlcik6IEl0ZW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQpO1xuICAgIH1cblxuICAgIGFkZEl0ZW0oaXRlbTogSXRlbSk6IHZvaWQge1xuICAgICAgICBpdGVtLmlkID0gdGhpcy5pdGVtcy5sZW5ndGggPyB0aGlzLml0ZW1zLmxlbmd0aCArIDEgOiAxO1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG5cbiAgICAgICAgdGhpcy5hZGRMb2NhbFN0b3JhZ2VJdGVtKClcbiAgICB9XG5cbiAgICBkZWxldGVJdGVtKGl0ZW06IEl0ZW0pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKF9pdGVtID0+IF9pdGVtLmlkICE9PSBpdGVtLmlkKTtcbiAgICAgICAgdGhpcy5hZGRMb2NhbFN0b3JhZ2VJdGVtKCk7XG4gICAgfVxuXG4gICAgZWRpdEl0ZW0oaXRlbTogSXRlbSk6IHZvaWQge1xuICAgICAgICBsZXQgX2l0ZW0gPSB0aGlzLmdldEl0ZW0oaXRlbS5pZCk7XG4gICAgICAgIF9pdGVtID0gaXRlbTtcbiAgICAgICAgdGhpcy5hZGRMb2NhbFN0b3JhZ2VJdGVtKCk7XG4gICAgfVxuXG4gICAgc2F2ZShpdGVtOiBJdGVtKSB7XG4gICAgICAgIGl0ZW0uaWQgPyB0aGlzLmVkaXRJdGVtKGl0ZW0pIDogdGhpcy5hZGRJdGVtKGl0ZW0pO1xuICAgIH1cbn1cbiJdfQ==