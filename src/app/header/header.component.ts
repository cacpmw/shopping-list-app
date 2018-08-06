import { Component } from "@angular/core";
import { DataStorageService } from "../services/data-storage.service";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",

})
export class HeaderComponent {

    constructor(private dataStorage: DataStorageService) { }
    postRecipes() {
        this.dataStorage.postRecipe().subscribe(
            (response: Response) => { console.log(response) },
            (error) => console.log(error),

        );
    }

    getRecipes() {
        this.dataStorage.getRecipes();
    }
}