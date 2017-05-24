import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {AppRoutingModule} from "./app.routing";
import {NativeScriptFormsModule} from "nativescript-angular/forms"

import {AppComponent} from "./app.component";

import {ItemService} from "./item/item.service";
import {ItemsComponent} from "./item/items.component";
import {ItemDetailComponent} from "./item/item-detail.component";
import {CreateItemComponent} from "./create-item/create-item.component";
import {LocalStorageService} from "./local-storage.service";
import {TNSFontIconModule} from "nativescript-ng2-fonticon";


@NgModule({
    bootstrap: [
        AppComponent,
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        TNSFontIconModule.forRoot({
            'mdi': 'material-design-icons.css'
        })
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        CreateItemComponent
    ],
    providers: [
        ItemService,
        LocalStorageService,

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
}
