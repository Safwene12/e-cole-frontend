import { Groupe } from "./groupe";

export class Etudiant {
    id : number;
    matricule : string;
    username : string;
    password : string;
    nom : string;
    prenom : string;
	numTel : string;
	email : string;
	dateDeNaissance : string;
	lieuDeNaissance : string;
	adresseActuelle : string;
	adresseOrigine : string;
	sexe : string;
	cin : number;
	photo : string;
	groupe : Groupe = new Groupe;
	
	
}