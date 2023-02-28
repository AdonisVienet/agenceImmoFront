import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  constructor(private httpClient: HttpClient) { }

  private prix_url = "http://localhost:8080/prix"
  private utilisateurss_url = "http://localhost:8080/utilisateurss"
  private gerants_url = "http://localhost:8080/gerants"
  private clients_url = "http://localhost:8080/clients"
  private surfaces_url = "http://localhost:8080/surfaces"

  public totalPrixOffreParis(): Observable<any> { return this.httpClient.get(this.prix_url); }

  public surfaceMoyenneOffreParis(): Observable<any> { return this.httpClient.get(this.surfaces_url); }

  public nombreUtilisateur(): Observable<any> { return this.httpClient.get(this.utilisateurss_url); }

  public nombreGerant(): Observable<any> { return this.httpClient.get(this.gerants_url); }

  public nombreClient(): Observable<any> { return this.httpClient.get(this.clients_url); }

}
