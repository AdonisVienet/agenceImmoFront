import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'app/app.service';
import { Utilisateur } from 'app/model/utilisateur';
import { StatistiqueService } from 'app/services/statistique.service';
import { UtilisateurService } from 'app/services/utilisateur.service';

@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html'
})
export class MapsComponent implements OnInit {

    constructor(private appService: AppService, private statistiqueService: StatistiqueService, private router: Router) { }

    ngOnInit() {
        this.surfaceMoyenneParis();
        this.totalPrixOffreParis();
        this.nombreUtilisateur();
        this.nombreGerant();
        this.nombreClient();
    }

    surfaceMoyenneParis() {
        this.statistiqueService.surfaceMoyenneOffreParis().subscribe((resultatSurface) => {
            console.log(resultatSurface);
        });
    }

    totalPrixOffreParis() {
        this.statistiqueService.totalPrixOffreParis().subscribe((resultatPrix) => {
            console.log(resultatPrix);
        });
    }

    nombreUtilisateur() {
        this.statistiqueService.nombreUtilisateur().subscribe((resultatUtilisateur) => {
            console.log(resultatUtilisateur);
        });
    }

    nombreGerant() {
        this.statistiqueService.nombreGerant().subscribe((resultatGerant) => {
            console.log(resultatGerant);
        });
    }

    nombreClient() {
        this.statistiqueService.nombreClient().subscribe((resultatClient) => {
            console.log(resultatClient);
        });
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
