import {Component, OnInit} from '@angular/core';
import {Item} from "../item/item";
import {ItemService} from "../item/item.service";

@Component({
    selector: 'create-item',
    moduleId: module.id,
    templateUrl: 'create-item.component.html',
    styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit{

    item: Item;

    constructor(private itemService: ItemService) {
    }

    ngOnInit(){
        this.item = new Item();
    }

    save() {
        this.itemService.addItem(this.item);
    }

}
