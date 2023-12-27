import { useLoaderData } from "react-router-dom";
import axios from 'axios';
import CockTailList from "../components/CockTailList"

const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
    const searchTerm = '';
    const response = await axios.get(`${cocktailSearchUrl} ${searchTerm}`);
    
    return { drinks: response.data.drinks, searchTerm };
}

const Landing = () => {
    const {drinks, searchTerm} = useLoaderData();

    return (
        <>
            <CockTailList drinks={drinks} />    
        </>
    )
}

export default Landing;