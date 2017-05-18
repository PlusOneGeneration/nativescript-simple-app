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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBQ2hELHFDQUFrQztBQUNsQyxxREFBaUQ7QUFDakQsMENBQXlDO0FBUXpDLElBQWEsbUJBQW1CO0lBSTVCLDZCQUFvQixXQUF3QixFQUN2QixRQUFrQjtRQURuQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN2QixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3ZDLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxrQ0FBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGtDQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTCwwQkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFyQlksbUJBQW1CO0lBTi9CLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztLQUM3QyxDQUFDO3FDQUttQywwQkFBVztRQUNiLGlCQUFRO0dBTDlCLG1CQUFtQixDQXFCL0I7QUFyQlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0l0ZW19IGZyb20gXCIuLi9pdGVtL2l0ZW1cIjtcbmltcG9ydCB7SXRlbVNlcnZpY2V9IGZyb20gXCIuLi9pdGVtL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHtMb2NhdGlvbn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NyZWF0ZS1pdGVtJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnY3JlYXRlLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2NyZWF0ZS1pdGVtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDcmVhdGVJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGl0ZW06IEl0ZW07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlICBsb2NhdGlvbjogTG9jYXRpb24pIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pdGVtID0gbmV3IEl0ZW0oKTtcbiAgICB9XG5cbiAgICBzYXZlKCkge1xuICAgICAgICB0aGlzLml0ZW1TZXJ2aWNlLmFkZEl0ZW0odGhpcy5pdGVtKTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG4gICAgfVxuXG4gICAgYmFjaygpIHtcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG4gICAgfVxuXG59XG4iXX0=