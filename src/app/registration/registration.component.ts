import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'app/model/utilisateur';
import { UtilisateurService } from 'app/services/utilisateur.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  users!:any[]
  roles!:any[]; 
  utilisateur:Utilisateur = new Utilisateur();
  constructor(private utilisateurService:UtilisateurService, private router:Router){}
  
  ngOnInit(): void {
    this.findAllUtilisateurs();

  }
  findAllUtilisateurs(){
    this.utilisateurService.findAll().subscribe(data => {this.users = data});
  }

  saveUtilisateur(){
    this.utilisateurService.save(this.utilisateur).subscribe(
      () => {
        this.findAllUtilisateurs();
        this.utilisateur = new Utilisateur();
      }
    )
  }
}
