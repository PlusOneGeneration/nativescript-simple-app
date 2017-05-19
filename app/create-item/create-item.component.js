"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_1 = require("../item/item");
var item_service_1 = require("../item/item.service");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var CreateItemComponent = (function () {
    function CreateItemComponent(itemService, location, route) {
        this.itemService = itemService;
        this.location = location;
        this.route = route;
    }
    CreateItemComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params["id"];
        this.item = id ? this.itemService.getItem(id) : new item_1.Item();
    };
    CreateItemComponent.prototype.save = function () {
        this.itemService.save(this.item);
        this.location.back();
    };
    CreateItemComponent.prototype.back = function () {
        this.location.back();
    };
    return CreateItemComponent;
}());
CreateItemComponent = __decorate([
    core_1.Component({
        selector: 'create-item',
        moduleId: module.id,
        templateUrl: 'create-item.component.html',
        styleUrls: ['./create-item.component.css']
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService,
        common_1.Location,
        router_1.ActivatedRoute])
], CreateItemComponent);
exports.CreateItemComponent = CreateItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBQ2hELHFDQUFrQztBQUNsQyxxREFBaUQ7QUFDakQsMENBQXlDO0FBQ3pDLDBDQUErQztBQVEvQyxJQUFhLG1CQUFtQjtJQUk1Qiw2QkFBb0IsV0FBd0IsRUFDdkIsUUFBa0IsRUFDbkIsS0FBcUI7UUFGckIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNuQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUN6QyxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNJLElBQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7SUFDL0QsQ0FBQztJQUVELGtDQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsa0NBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVMLDBCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSxtQkFBbUI7SUFOL0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO0tBQzdDLENBQUM7cUNBS21DLDBCQUFXO1FBQ2IsaUJBQVE7UUFDWix1QkFBYztHQU5oQyxtQkFBbUIsQ0F1Qi9CO0FBdkJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJdGVtfSBmcm9tIFwiLi4vaXRlbS9pdGVtXCI7XG5pbXBvcnQge0l0ZW1TZXJ2aWNlfSBmcm9tIFwiLi4vaXRlbS9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7TG9jYXRpb259IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjcmVhdGUtaXRlbScsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJ2NyZWF0ZS1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9jcmVhdGUtaXRlbS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRlSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBpdGVtOiBJdGVtO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSAgbG9jYXRpb246IExvY2F0aW9uLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnN0IGlkID0gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XG4gICAgICAgIHRoaXMuaXRlbSA9IGlkID8gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtKGlkKSA6IG5ldyBJdGVtKCk7XG4gICAgfVxuXG4gICAgc2F2ZSgpIHtcbiAgICAgICAgdGhpcy5pdGVtU2VydmljZS5zYXZlKHRoaXMuaXRlbSk7XG4gICAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xuICAgIH1cblxuICAgIGJhY2soKSB7XG4gICAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xuICAgIH1cblxufVxuIl19