"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_1 = require("../item/item");
var item_service_1 = require("../item/item.service");
var common_1 = require("@angular/common");
var CreateItemComponent = (function () {
    function CreateItemComponent(itemService, location) {
        this.itemService = itemService;
        this.location = location;
    }
    CreateItemComponent.prototype.ngOnInit = function () {
        this.item = new item_1.Item();
    };
    CreateItemComponent.prototype.save = function () {
        this.itemService.addItem(this.item);
        this.location.back();
    };
    CreateItemComponent.prototype.back = function () {
        console.log('ddd');
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
        common_1.Location])
], CreateItemComponent);
exports.CreateItemComponent = CreateItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBQ2hELHFDQUFrQztBQUNsQyxxREFBaUQ7QUFDakQsMENBQXlDO0FBUXpDLElBQWEsbUJBQW1CO0lBSTVCLDZCQUFvQixXQUF3QixFQUN2QixRQUFrQjtRQURuQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN2QixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3ZDLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxrQ0FBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGtDQUFJLEdBQUo7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVMLDBCQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQztBQXRCWSxtQkFBbUI7SUFOL0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO0tBQzdDLENBQUM7cUNBS21DLDBCQUFXO1FBQ2IsaUJBQVE7R0FMOUIsbUJBQW1CLENBc0IvQjtBQXRCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SXRlbX0gZnJvbSBcIi4uL2l0ZW0vaXRlbVwiO1xuaW1wb3J0IHtJdGVtU2VydmljZX0gZnJvbSBcIi4uL2l0ZW0vaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQge0xvY2F0aW9ufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY3JlYXRlLWl0ZW0nLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICdjcmVhdGUtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vY3JlYXRlLWl0ZW0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENyZWF0ZUl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgaXRlbTogSXRlbTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgIGxvY2F0aW9uOiBMb2NhdGlvbikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLml0ZW0gPSBuZXcgSXRlbSgpO1xuICAgIH1cblxuICAgIHNhdmUoKSB7XG4gICAgICAgIHRoaXMuaXRlbVNlcnZpY2UuYWRkSXRlbSh0aGlzLml0ZW0pO1xuICAgICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgICB9XG5cbiAgICBiYWNrKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZGRkJyk7XG4gICAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xuICAgIH1cblxufVxuIl19