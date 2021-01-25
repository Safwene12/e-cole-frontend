import { Enseignant } from "./enseignant";
import { Groupe } from "./groupe";
import { Matiere } from "./matiere";

export class EnseiMat {
    commentaire: string ;
    enseignant: Enseignant;
    groupe: Groupe;
    matiere: Matiere ;
    id: number;
}
