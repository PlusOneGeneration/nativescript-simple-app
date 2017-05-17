"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_1 = require("../item/item");
var item_service_1 = require("../item/item.service");
var CreateItemComponent = (function () {
    function CreateItemComponent(itemService) {
        this.itemService = itemService;
    }
    CreateItemComponent.prototype.ngOnInit = function () {
        this.item = new item_1.Item();
    };
    CreateItemComponent.prototype.save = function () {
        this.itemService.addItem(this.item);
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
    __metadata("design:paramtypes", [item_service_1.ItemService])
], CreateItemComponent);
exports.CreateItemComponent = CreateItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBQ2hELHFDQUFrQztBQUNsQyxxREFBaUQ7QUFRakQsSUFBYSxtQkFBbUI7SUFJNUIsNkJBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQzVDLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxrQ0FBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTCwwQkFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksbUJBQW1CO0lBTi9CLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztLQUM3QyxDQUFDO3FDQUttQywwQkFBVztHQUpuQyxtQkFBbUIsQ0FlL0I7QUFmWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SXRlbX0gZnJvbSBcIi4uL2l0ZW0vaXRlbVwiO1xuaW1wb3J0IHtJdGVtU2VydmljZX0gZnJvbSBcIi4uL2l0ZW0vaXRlbS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY3JlYXRlLWl0ZW0nLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICdjcmVhdGUtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vY3JlYXRlLWl0ZW0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENyZWF0ZUl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgICBpdGVtOiBJdGVtO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLml0ZW0gPSBuZXcgSXRlbSgpO1xuICAgIH1cblxuICAgIHNhdmUoKSB7XG4gICAgICAgIHRoaXMuaXRlbVNlcnZpY2UuYWRkSXRlbSh0aGlzLml0ZW0pO1xuICAgIH1cblxufVxuIl19