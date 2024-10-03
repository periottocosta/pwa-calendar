import { Country, SubDivision } from "./regional";

export interface UserSettings {
    name: string;
    email: string;
    workingDays: string[];
    country: Country;
    subDivision: SubDivision;
}