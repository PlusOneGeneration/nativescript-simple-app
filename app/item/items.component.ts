import {Component, OnInit} from "@angular/core";

import {Item} from "./item";
import {ItemService} from "./item.service";
import {Router} from "@angular/router";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    constructor(private itemService: ItemService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getItems();
    }

    getItems() {
        this.items = this.itemService.getItems();
    }

    create() {
        this.router.navigate(['/items/create']);
    }

    remove(item: Item) {
        this.itemService.deleteItem(item);
        this.getItems();
    }
}
