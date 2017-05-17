import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable()
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Ira", role: "Developer" },
        { id: 2, name: "Feya", role: "Developer" },
        { id: 3, name: "Anleo", role: "Developer" },
        { id: 4, name: "Koralex", role: "Developer" },
        { id: 5, name: "Dimon", role: "Developer" }

    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.find(item => item.id === id);
    }
}
