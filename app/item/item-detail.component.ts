import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {Location} from "@angular/common";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    item: Item;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        private location: Location,
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(id);
    }

    remove() {
        this.itemService.deleteItem(this.item);
        this.back();
    }

    back() {
        this.location.back();
    }
}
