export interface ICarSign {
    signs: string[],
    side: string,
}
export interface ICapitalInfo {
    latlng: number[]
}

export type Currencies = { [currencySymbol: string]: ICurrency }

export interface ICurrency {
    name: string;
    symbol: string;
}

export interface IImage {
    png: string;
    svg: string;
}

export type Demonyms = { [lang: string]: ILang }

export interface ILang {
    f: string;
    m: string;
}

export interface IIdd {
    root: string;
    suffixes: string[];
}

export type ILanguage = { [lang: string]: string };

export interface IMaps {
    googleMaps: string;
    openStreetMaps: string;
}
export interface ICountryName {
    common: string;
    nativeName?: INativeName;
    official: string;
}

export type INativeName = { [name: string]: ICountryName}

export interface ICountry {
    altSpellings: [];
    area: number;
    borders: [];
    capital: [];
    capitalInfo: ICapitalInfo;
    car: ICarSign;
    cca2: string;
    cca3: string;
    ccn3: string;
    cioc: string;
    coatOfArms: IImage;
    continents: string[],
    currencies: Currencies,
    demonyms: Demonyms,
    fifa: string;
    flag: string;
    flags: IImage;
    idd: IIdd;
    independent: boolean
    landlocked: boolean;
    languages: ILanguage;
    latlng: number[];
    maps: IMaps;
    name: ICountryName;
    population: number;
    region: string;
    startOfWeek: string;
    status: string;
    subregion: string;
    timezones: string[]
    tld: string[]
    translations: INativeName;
    unMember: boolean;
}