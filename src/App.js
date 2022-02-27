import React, {useContext, useState} from 'react';
import {BrowserRouter as Router , Route , Routes} from "react-router-dom";
import classes from './styles/main.module.css';
import TopBar from "./component/topBar/TopBar";
import CountriesContext from "./store/countries-context";
import CountryDetails from "./component/countries/CountryDetails";

function App() {
    const ctx = useContext(CountriesContext);

  return (
    <React.Fragment>
        <section className={ctx.darkMode ? `${classes.lightMode}` : `${classes.darkMode}`}>
            <header className={ctx.darkMode ? `${classes.header} ${classes.container}` :`${classes.darkModeHeader}  ${classes.container}`}>
                <h2>Where in the world?</h2>
                    <button className={classes.button} onClick={ctx.changeTheme}>
                        <ion-icon name="moon-outline" ></ion-icon>
                        Dark Mode
                    </button>
            </header>
            <Router>
                <Routes>
                    <Route path="/" exact element={ <TopBar />}></Route>
                    <Route path="/countriesDetails/:name" element={<CountryDetails/>}></Route>
                </Routes>
            </Router>
        </section>
    </React.Fragment>
  );
}

export default App;
