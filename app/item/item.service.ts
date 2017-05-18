import {Injectable} from "@angular/core";

import {Item} from "./item";

@Injectable()
export class ItemService {
    private items = [
        {id: 1, name: "Ira", role: "Developer"},
        {id: 2, name: "Feya", role: "Developer"},
        {id: 3, name: "Anleo", role: "Developer"},
        {id: 4, name: "Koralex", role: "Developer"},
        {id: 5, name: "Dimon", role: "Developer"}
    ];

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.find(item => item.id === id);
    }

    addItem(item: Item): void {
        item.id = this.items.length + 1;
        this.items.push(item);
    }

    deleteItem(item: Item): void {
        this.items = this.items.filter(_item => _item.id !== item.id);
    }

}
