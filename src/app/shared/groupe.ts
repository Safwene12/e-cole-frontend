import { Section } from "./section";

export class Groupe {
    id : number
    nomGroupe : string;
	anneeScollaire : string
    sectionId : number;
    section : Section = new Section;
	
}