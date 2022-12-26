import React, {useState} from 'react';
import {ICountry, INativeName} from "../../redux/interfaces/countrieList";
import {appData} from "../../redux/selectors";
import {CountryDetails} from "../CountryDetails/CountryDetails";
import styles from "./List.module.css";

interface IProps {
    input: string;
}
export const List = ({input}: IProps): JSX.Element => {
    const [selectedCountry, setSelectedCountry] = useState<ICountry | undefined>(undefined);
    const [showSelectedCountry, setShowSelectedCountry] = useState<boolean>(false);
    const {countriesList} = appData();
    const filteredData = countriesList.filter((el) => {
        //if no input the return the original
        if (input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.common.toLowerCase().startsWith(input)
        }
    });

    const clickedOnCountry = (countryName: string) => {
        const selectedCountry = (countriesList.find(country => country?.name?.common === countryName)) as ICountry;
        setSelectedCountry({...selectedCountry});
        setShowSelectedCountry(true);
    }

    return (
        <div className={styles.listContainer}>
            <ul>
                {filteredData.map((item) => (
                    <li key={item.name.common} onClick={() => clickedOnCountry(item.name.common)}>{item.name.common}</li>
                ))}
            </ul>
            {showSelectedCountry &&
                <CountryDetails country={selectedCountry} />
            }
        </div>
    )
}