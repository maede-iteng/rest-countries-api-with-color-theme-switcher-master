import React,{useState, useEffect} from 'react';
import axios from "axios";
import {baseURL} from "../component/General";
import { trackPromise } from 'react-promise-tracker';

const CountriesContext = React.createContext({
    countries:[],
    error:'',
    darkMode:false,
    changeTheme: () =>{},
    filterSelectHandler: () =>{}
});
export const CountriesContextProvider = (props) =>{
    const [countries , setCountries] = useState([]);
    const [error , setError] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    useEffect( () =>{
        const currentThemeColor = localStorage.getItem('theme-color');
        if(currentThemeColor === 'lightMode'){
            setDarkMode(false);
        }else{
            setDarkMode(true);
        }
    },[]);

    const changeTheme = () =>{
        if(darkMode){
            localStorage.setItem('theme-color' , 'lightMode');
            document.body.classList.add('darkMode');
            setDarkMode(mode => mode = !mode);
        }else if(!darkMode){
            localStorage.setItem('theme-color' , 'darkMode');
            document.body.classList.remove('darkMode');
            setDarkMode(mode => mode = !mode);
        }
    }

    useEffect( () =>{
        trackPromise(
        axios.get(baseURL + "/all")
            .then(responsive =>{
                setCountries(responsive.data);
                console.log(responsive.data);
            }).catch(error => {
            setError(error);
        })
    );
    },[]);
    if(error){
        return `Error: ${error.message}`;
    }

    const filterSelectHandler = async (region) => {
        if(region === '') return;
            await axios.get(baseURL + `/region/${region}`).then(responsive =>{
            setCountries(responsive.data);
        }).catch(error =>{
            setError(error);
        })
    };

    return(
        <CountriesContext.Provider value={{
            error:error,
            countries:countries,
            darkMode: darkMode,
            changeTheme : changeTheme,
            filterSelectHandler: filterSelectHandler
        }}>
            {props.children}
        </CountriesContext.Provider>
    )
}
export default CountriesContext;