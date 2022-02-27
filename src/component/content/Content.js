import React from 'react';
import TopBar from "../topBar/TopBar";
import CountriesCards from "../countries/CountriesCards";

const Content = () =>{
    return(
        <React.Fragment>
            <TopBar/>
            <CountriesCards/>
        </React.Fragment>
    )
}
export default Content;