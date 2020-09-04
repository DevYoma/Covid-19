import axios from 'axios';

//the url 
const url = 'https://covid19.mathdro.id/api';

//cards api
export const fetchData = async (country) => {

    let changeableUrl = url;

    if(country){
        changeableUrl = `${url}/countries/${country}`
    }

    try {
        //destructuring data from response
        const {data : {confirmed, recovered, deaths, lastUpdate }} = await axios.get(changeableUrl);

        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }

        //api returns something back
        return modifiedData

    } catch (error) {
        console.log(error);
    }
}

//chart api
export const fetchDailyData = async () => {
    try {
        //destructuring data from the response
        const {data} = await axios.get(`${url}/daily`);

        console.log(data);

        //mapping over the data and returning an instance of an object(put a bracket, then the object bracket)
        const modifiedDailyData = data.map((dailyData) => ({
            // whatever is in here is an object
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedDailyData;

    } catch (error) {
        console.log();
    }
}


//countryPicker api
export const CountriesList = async () => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
        // console.log(response );
    } catch (error) {
        
    }
}