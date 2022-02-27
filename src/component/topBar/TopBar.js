import React, {useState , useContext} from 'react';
import classes from '../../styles/main.module.css';
import CountriesContext from "../../store/countries-context";
import Card from "../countries/Card";

const TopBar = () =>{
    const ctx = useContext(CountriesContext);
    const [searchTerm , setSearchTerm] = useState('');
    const [filterTerm, setFilterTerm] = useState([]);

    const searchHandler = (event) => {
        setSearchTerm(event.target.value);
    };

    const searchResults = ctx.countries.filter(country =>{
            if(searchTerm === ""){
                return country;
            }else if(country.name.common.toLowerCase().includes(searchTerm.toLowerCase())){
                return country;
            }
        }).map(country =>{
            return(
                <Card key={country.name.common}
                      flag={country.flags.png}
                      name={country.name.common}
                      population={country.population}
                      region={country.region}
                      capital={country.capital}
                      ccn3={country.ccn3}
                />
            )
        });

    return(
        <React.Fragment>
            <div className={`${classes.topBar} ${classes.container}`}>
                <div className={classes.wrapper}>
                    <div className={ctx.darkMode ?
                        `${classes.searchWrapper}` :
                        `${classes.darkModeSearchWrapper}`
                    }
                    >
                        <input type="text"
                               placeholder="Search for a country..."
                               className={classes.searchInput}
                               onChange={searchHandler}
                               value={searchTerm}
                        />
                        <ion-icon name="search"></ion-icon>
                    </div>
                    <select name="Region"
                            id="Region"
                            onChange={(event) => ctx.filterSelectHandler(event.target.value)}
                            className={ctx.darkMode ?
                                `${classes.selectInput}` :
                                `${classes.darkModeSelectInput}`}

                    >
                        <option value="All" disabled selected hidden>Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                    </div>
                <div className={`${classes.cardsWrapper} `}>
                    {searchResults}
                </div>

            </div>


        </React.Fragment>
    )
}
export default TopBar;