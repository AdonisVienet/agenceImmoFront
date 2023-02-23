import { Avis } from "./avis";
import { Visite } from "./visite";

export enum EtatOffre {
    RENOVE = "RENOVE",
    NEUF = "NEUF",
    BON_ETAT = "BON_ETAT",
    PASSABLE = "PASSABLE",
    A_RENOVE = "A_RENOVE"
}

export class Offre {
    idOffre!: number;
    adresseOffre!: string;
    ville!: string;
    prixOffre!: number;
    surfaceOffre!: number;
    description!: string;
    imageOffre!: File;
    disponibiliteOffre!: boolean;
    orientationOffre!: string;
    etatOffre!: EtatOffre;
    typeOffre!: string;
    visite!: Visite[];
    avis!: Avis[];
}
