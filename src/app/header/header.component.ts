import { Component } from "@angular/core";
import { DataStorageService } from "../services/data-storage.service";
import { AuthService } from "../services/auth.service";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ['./header.component.css']

})
export class HeaderComponent {

    constructor(private dataStorage: DataStorageService,
        private authService: AuthService) { }
    postRecipes() {
        this.dataStorage.postRecipe().subscribe(
            (response: Response) => { console.log(response) },
            (error) => console.log(error),

        );
    }

    getRecipes() {
        this.dataStorage.getRecipes();
    }
    logout() {
        this.authService.logout();
    }
}