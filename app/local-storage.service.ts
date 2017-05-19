import {Injectable} from "@angular/core";
require("nativescript-localstorage");

@Injectable()
export class LocalStorageService {

    getItem(name) {
        return localStorage.getItem(name)
    }

    addItem(name: string, data): void {
        localStorage.setItem(name, data)
    }

    clear(): void {
        localStorage.clear();
    }

}
