import {ICountry} from "./countrieList";

export interface IStore {
    appData: IAppData;
}

export interface IAppData {
    countriesList: ICountry[]
}