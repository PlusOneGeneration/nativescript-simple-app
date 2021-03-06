import {Injectable} from "@angular/core";

import {LocalStorageService} from "../local-storage.service";
import {Item} from "./item";

@Injectable()
export class ItemService {

    items: Item[] = [];

    constructor(private  localStorageService: LocalStorageService) {
    }

    getLocalStorageItems() {
        return JSON.parse(this.localStorageService.getItem('Person list'));
    }

    addLocalStorageItem() {
        this.localStorageService.clear();
        this.localStorageService.addItem('Person list', JSON.stringify(this.items))
    }

    getItems(): Item[] {
        return this.items = this.getLocalStorageItems() ? this.getLocalStorageItems() : [];
    }

    getItem(id: number): Item {
        return this.items.find(item => item.id === id);
    }

    addItem(item: Item): void {
        item.id = this.items.length ? this.items.length + 1 : 1;
        this.items.push(item);

        this.addLocalStorageItem()
    }

    deleteItem(item: Item): void {
        this.items = this.items.filter(_item => _item.id !== item.id);
        this.addLocalStorageItem();
    }

    editItem(item: Item): void {
        let _item = this.getItem(item.id);
        _item = item;
        this.addLocalStorageItem();
    }

    save(item: Item) {
        item.id ? this.editItem(item) : this.addItem(item);
    }
}
