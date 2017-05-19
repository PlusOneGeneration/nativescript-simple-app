import {Component, OnInit} from '@angular/core';
import {Item} from "../item/item";
import {ItemService} from "../item/item.service";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'create-item',
    moduleId: module.id,
    templateUrl: 'create-item.component.html',
    styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

    item: Item;

    constructor(private itemService: ItemService,
                private  location: Location,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        const id = +this.route.snapshot.params["id"];
        this.item = id ? this.itemService.getItem(id) : new Item();
    }

    save() {
        this.itemService.save(this.item);
        this.location.back();
    }

    back() {
        this.location.back();
    }

}
