import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import {CreateItemComponent} from "./create-item/create-item.component";

const routes = [
    {path: "", redirectTo: "/items", pathMatch: "full"},
    {path: "items", component: ItemsComponent},
    {path: "item/create", component: CreateItemComponent},
    {path: "item/:id", component: ItemDetailComponent},

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }