import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { Utilisateur } from 'app/model/utilisateur';
import { UtilisateurService } from 'app/services/utilisateur.service';

declare const google: any;

interface Marker {
    lat: number;
    lng: number;
    label?: string;
    draggable?: boolean;
}
@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html'
})
export class MapsComponent implements OnInit {
    constructor(private appService: AppService) { }

    ngOnInit() {
    }

    authenticated() {
        return this.appService.authenticated; //par défaut = false donc si connecté =true
    }
    //Gestion des profils : 
    authorities() {
        if (this.appService.isAdmin == true) {
            return false; //car on va utiliser la directive [hidden]=false si isAdmin = true
        } else {
            return true; // ici [hidden]=true si isAdmin=false
        }
    }
}
