import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'app/app.service';
import { Utilisateur } from 'app/model/utilisateur';
import { RoleService } from 'app/services/role.service';
import { UtilisateurService } from 'app/services/utilisateur.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})

export class IconsComponent {
  // Déclaration d'un tableau d'utilisateur 
  // any : n'importe quel type de données 
  // ! ==> le tableau n'est pas initialisé 
  users!: any[];
  roles!: any[];
  utilisateur: Utilisateur = new Utilisateur();
  // DI  : par constructeur  
  constructor(private utilisateurService: UtilisateurService, private roleService: RoleService, private appService: AppService, private router: Router) { }
  ngOnInit(): void {
    this.findAllUtilisateurs();
    this.findAllRole();
  }

  findAllUtilisateurs() {
    this.utilisateurService.findAll().subscribe(data => { this.users = data; });
  }

  findAllRole() {
    this.roleService.findAll().subscribe(data => { this.roles = data; });
  }
  saveUtilisateur() {
    this.utilisateurService.save(this.utilisateur).subscribe(
      () => {
        this.findAllUtilisateurs(); // MAJ la lise des utilisateurs
        this.utilisateur = new Utilisateur(); // Vider le formulaire
      }
    )
  }
  deleteUtilisateur(id: number) {
    this.utilisateurService.delete(id).subscribe(() => { this.findAllUtilisateurs(); })
  }



  updateUtilisateur() {
    console.log("update utilisateur", this.users);
    this.utilisateurService.save(this.users).subscribe(
      () => {
        console.log("Update ok");
      }
    )
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


