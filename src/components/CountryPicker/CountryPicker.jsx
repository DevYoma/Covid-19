import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import {CountriesList} from '../../api'

import styles from './CountryPicker.module.css';

const CountryPicker = ({handleCountryChange}) => {
  
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            //we await the data from the api
            setFetchedCountries(await CountriesList())
        }

        fetchCountries();
    }, [setFetchedCountries])

    console.log(fetchedCountries);

    return ( 
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {fetchedCountries.map((country) => <option value={country} key={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
     );
}
 
export default CountryPicker;