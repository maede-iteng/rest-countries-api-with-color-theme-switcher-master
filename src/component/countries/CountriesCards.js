import React,{useState , useEffect , useContext} from 'react';
import Card from './Card';
import classes from '../../styles/main.module.css';
import axios from "axios";
import CountryDetails from "./CountryDetails";
import {Link} from "react-router-dom";
import {baseURL} from "../General";
import CountriesContext from "../../store/countries-context";

const CountriesCards = () =>{
    const ctx = useContext(CountriesContext);

    return(
        <React.Fragment>
            <div className={`${classes.cardsWrapper} ${classes.container}`}>
                {/*{ctx.countries.map((country,key) => {*/}
                {/*    return(*/}
                {/*            <Card key={country.ccn3}*/}
                {/*                  flag={country.flags.png}*/}
                {/*                  name={country.name.common}*/}
                {/*                  population={country.population}*/}
                {/*                  region={country.region}*/}
                {/*                  capital={country.capital}*/}
                {/*            />*/}
                {/*    )*/}
                {/*})}*/}

            </div>
        </React.Fragment>
    )
}
export default CountriesCards;