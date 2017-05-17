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
    ItemService.prototype.deleteItem = function (item) {
        this.items = this.items.filter(function (item) { return item.id !== item.id; });
    };
    return ItemService;
}());
ItemService = __decorate([
    core_1.Injectable()
], ItemService);
exports.ItemService = ItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBS3pDLElBQWEsV0FBVztJQUR4QjtRQUVZLFVBQUssR0FBRztZQUNaLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUM7WUFDdkMsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQztZQUN4QyxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDO1lBQ3pDLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUM7WUFDM0MsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQztTQUM1QyxDQUFDO0lBbUJOLENBQUM7SUFqQkcsOEJBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsRUFBVTtRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsSUFBVTtRQUNkLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsSUFBVTtRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFuQixDQUFtQixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQztBQTFCWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7R0FDQSxXQUFXLENBMEJ2QjtBQTFCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHtJdGVtfSBmcm9tIFwiLi9pdGVtXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJdGVtU2VydmljZSB7XG4gICAgcHJpdmF0ZSBpdGVtcyA9IFtcbiAgICAgICAge2lkOiAxLCBuYW1lOiBcIklyYVwiLCByb2xlOiBcIkRldmVsb3BlclwifSxcbiAgICAgICAge2lkOiAyLCBuYW1lOiBcIkZleWFcIiwgcm9sZTogXCJEZXZlbG9wZXJcIn0sXG4gICAgICAgIHtpZDogMywgbmFtZTogXCJBbmxlb1wiLCByb2xlOiBcIkRldmVsb3BlclwifSxcbiAgICAgICAge2lkOiA0LCBuYW1lOiBcIktvcmFsZXhcIiwgcm9sZTogXCJEZXZlbG9wZXJcIn0sXG4gICAgICAgIHtpZDogNSwgbmFtZTogXCJEaW1vblwiLCByb2xlOiBcIkRldmVsb3BlclwifVxuICAgIF07XG5cbiAgICBnZXRJdGVtcygpOiBJdGVtW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcbiAgICB9XG5cbiAgICBnZXRJdGVtKGlkOiBudW1iZXIpOiBJdGVtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGlkKTtcbiAgICB9XG5cbiAgICBhZGRJdGVtKGl0ZW06IEl0ZW0pOiB2b2lkIHtcbiAgICAgICAgaXRlbS5pZCA9IHRoaXMuaXRlbXMubGVuZ3RoICsgMTtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgIH1cblxuICAgIGRlbGV0ZUl0ZW0oaXRlbTogSXRlbSk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBpdGVtLmlkKTtcbiAgICB9XG5cbn1cbiJdfQ==