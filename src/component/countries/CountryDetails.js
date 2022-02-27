import React, {useContext, useEffect, useState} from 'react';
import CountriesContext from "../../store/countries-context";
import axios from "axios";
import {baseURL} from "../General";
import {useNavigate , useLocation, useParams ,Link} from "react-router-dom";
import classes from '../../styles/main.module.css';

const CountryDetails = () =>{
    const ctx = useContext(CountriesContext);
    const [details , setDetails] = useState([]);
    // const [borderCountries , setBorderCountries] = useState(false);
    const navigate = useNavigate();
    let {name} = useParams();
    let newBorders=[];
    if (details.borders) {
        for (let i = 0; i < details.borders.length; i++) {
            [newBorders[i]] = details.filter(
                (country) => country.cca3 === country.borders[i]
            );
        }
        console.log(newBorders);
    }
    const goBackButtonHandler = () =>{
        navigate('/')
    }
    useEffect(() => {
            const countryData = async () =>{
                await axios.get(baseURL + `/name/${name}`)
                    .then(responsive => {
                        setDetails(responsive.data);
                })
            }
            countryData();
    },[name]);

    return(
        <React.Fragment>
            <div className={classes.container}>
            <button className={ctx.darkMode ? `${classes.darkModeBtn}` :`${classes.lightModeBtn}`} onClick={goBackButtonHandler}>
                <ion-icon name="arrow-back-outline" ></ion-icon> Back
            </button>
            {details.map(detail =>{
                return(
                    <div className={classes.details} key={detail.ccn3}>
                        <section className={classes.imgContainer}>
                            <img src={detail.flags.svg} alt={detail.name.common}/>
                        </section>
                        <section className={classes.info}>
                            <h1>{detail.name.common}</h1>
                            <div className={classes.descriptionSection}>
                            <div className={classes.leftSide}>
                                <p>Native Name: <span>{detail.name.official}</span></p>
                                <p>Population:
                                    <span>{new Intl.NumberFormat().format(detail.population)}</span>
                                </p>
                                <p>Region: <span>{detail.region}</span></p>
                                <p>subRegion: <span>{detail.subregion}</span></p>
                                <p>capital: <span>{detail.capital}</span></p>
                            </div>
                            <div className={classes.rightSide}>
                                <p>topLevelDomain: <span>{detail.tld}</span></p>
                                <p>currency: <span>{detail.currencies[0]}</span></p>
                                <p>languages: <span>{detail.languages[0]}</span></p>
                            </div>
                            </div>
                            <div className={classes.borderCountries}>Border Countries:
                                {newBorders.length > 0 ? (
                                    newBorders.map((el) => {
                                        return (
                                            el && (
                                                <Link
                                                    to={`/${el.cca3}`}
                                                    className="border"
                                                    key={el.cca3}
                                                >
                                                    <button>{el.name}</button>
                                                // </Link>
                                            )
                                        );
                                    })
                                ) : (
                                    <p>None (This country is probably on an island)</p>
                                )}
                            </div>
                        </section>
                    </div>
                )
            })}
            </div>
        </React.Fragment>
    )
}
export default CountryDetails;