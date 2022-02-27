import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import classes from '../../styles/main.module.css';
import CountriesContext from "../../store/countries-context";
import CountryDetails from "./CountryDetails";

const Cards = (props) =>{
    const ctx = useContext(CountriesContext);
    const countriesDetailsPage = (countryId) =>{
        localStorage.setItem('selectedCountry' , countryId);
    }
    return(
        <React.Fragment>
            <Link to={`/countriesDetails/${props.name}`} key={props.ccn3}>
            <div className={ctx.darkMode ? `${classes.card}` : `${classes.darkModeCard}`}
                 >
                <img src={props.flag} alt={props.name}/>
                <div className={classes.description}>
                    <h3 className={classes.name}>{props.name}</h3>
                    <div className={classes.row}>
                        <p>Population:</p>
                        <p>{props.population}</p>
                    </div>
                    <div className={classes.row}>
                        <p>Region:</p>
                        <p>{props.region}</p>
                    </div>
                    <div className={classes.row}>
                        <p>Capital:</p>
                        <p>{props.capital}</p>
                    </div>
              </div>
            </div>
            </Link>
        </React.Fragment>
    )
}
export default Cards;