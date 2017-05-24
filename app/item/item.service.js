"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var local_storage_service_1 = require("../local-storage.service");
var ItemService = (function () {
    function ItemService(localStorageService) {
        this.localStorageService = localStorageService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLGtFQUE2RDtBQUk3RCxJQUFhLFdBQVc7SUFJcEIscUJBQXFCLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBRjdELFVBQUssR0FBVyxFQUFFLENBQUM7SUFHbkIsQ0FBQztJQUVELDBDQUFvQixHQUFwQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQseUNBQW1CLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFDL0UsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDdkYsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxFQUFVO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQWQsQ0FBYyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxJQUFVO1FBQ2QsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFBO0lBQzlCLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsSUFBVTtRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELDhCQUFRLEdBQVIsVUFBUyxJQUFVO1FBQ2YsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCwwQkFBSSxHQUFKLFVBQUssSUFBVTtRQUNYLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUE3Q0QsSUE2Q0M7QUE3Q1ksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQUtpQywyQ0FBbUI7R0FKcEQsV0FBVyxDQTZDdkI7QUE3Q1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7TG9jYWxTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4uL2xvY2FsLXN0b3JhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHtJdGVtfSBmcm9tIFwiLi9pdGVtXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJdGVtU2VydmljZSB7XG5cbiAgICBpdGVtczogSXRlbVtdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICBsb2NhbFN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgZ2V0TG9jYWxTdG9yYWdlSXRlbXMoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5nZXRJdGVtKCdQZXJzb24gbGlzdCcpKTtcbiAgICB9XG5cbiAgICBhZGRMb2NhbFN0b3JhZ2VJdGVtKCkge1xuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmFkZEl0ZW0oJ1BlcnNvbiBsaXN0JywgSlNPTi5zdHJpbmdpZnkodGhpcy5pdGVtcykpXG4gICAgfVxuXG4gICAgZ2V0SXRlbXMoKTogSXRlbVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMgPSB0aGlzLmdldExvY2FsU3RvcmFnZUl0ZW1zKCkgPyB0aGlzLmdldExvY2FsU3RvcmFnZUl0ZW1zKCkgOiBbXTtcbiAgICB9XG5cbiAgICBnZXRJdGVtKGlkOiBudW1iZXIpOiBJdGVtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGlkKTtcbiAgICB9XG5cbiAgICBhZGRJdGVtKGl0ZW06IEl0ZW0pOiB2b2lkIHtcbiAgICAgICAgaXRlbS5pZCA9IHRoaXMuaXRlbXMubGVuZ3RoID8gdGhpcy5pdGVtcy5sZW5ndGggKyAxIDogMTtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuXG4gICAgICAgIHRoaXMuYWRkTG9jYWxTdG9yYWdlSXRlbSgpXG4gICAgfVxuXG4gICAgZGVsZXRlSXRlbShpdGVtOiBJdGVtKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmZpbHRlcihfaXRlbSA9PiBfaXRlbS5pZCAhPT0gaXRlbS5pZCk7XG4gICAgICAgIHRoaXMuYWRkTG9jYWxTdG9yYWdlSXRlbSgpO1xuICAgIH1cblxuICAgIGVkaXRJdGVtKGl0ZW06IEl0ZW0pOiB2b2lkIHtcbiAgICAgICAgbGV0IF9pdGVtID0gdGhpcy5nZXRJdGVtKGl0ZW0uaWQpO1xuICAgICAgICBfaXRlbSA9IGl0ZW07XG4gICAgICAgIHRoaXMuYWRkTG9jYWxTdG9yYWdlSXRlbSgpO1xuICAgIH1cblxuICAgIHNhdmUoaXRlbTogSXRlbSkge1xuICAgICAgICBpdGVtLmlkID8gdGhpcy5lZGl0SXRlbShpdGVtKSA6IHRoaXMuYWRkSXRlbShpdGVtKTtcbiAgICB9XG59XG4iXX0=