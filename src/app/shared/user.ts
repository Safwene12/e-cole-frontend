export class User {
    id : number;
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
	accessToken?: string;
	authorities : string[] ;
}