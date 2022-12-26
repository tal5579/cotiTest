import React from 'react';
import {ICountry} from "../../redux/interfaces/countrieList";
import styles from "./CountryDetails.module.css";

interface IProps {
    country: ICountry | undefined;
}
export const CountryDetails = ({country}: IProps): JSX.Element => {
    const countryCapital = country?.capital || '';
    const countryPopulation = country?.population || 0;
    const countryCode = country?.cca2 || '';
    const countryFlagUrl = country?.flags?.png || '';
    return (
        <>
            <table className={styles.countryTable}>
                <tr>
                    <td>Capital</td>
                    <td>Population</td>
                    <td>alpha2Code</td>
                    <td>Flag</td>
                </tr>
                <tr>
                    <td>{countryCapital}</td>
                    <td>{countryPopulation}</td>
                    <td>{countryCode}</td>
                    <td>
                        <img src={`${countryFlagUrl}`} />
                    </td>
                </tr>
            </table>
        </>
    )
}