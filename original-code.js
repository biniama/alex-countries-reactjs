import React, {useEffect, useState} from 'react';
import axios from "axios";


const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {

        axios({
            method: 'GET',
            url: 'https://restcountries.com/v3.1/all'
        }).then((response) => {
                // console.log(`status: ${response.status}`)
                //console.log('statuscode:' + response.statusCode)
                //console.log(`data ${JSON.stringify(response.data)}`)
                // console.log(`data ${JSON.stringify(response.data[0])}`)
                // console.log(`data ${JSON.stringify(response.data[1])}`)

                setCountries(response.data);

                // response.data.map((country) => {
                //
                //     setCountries({
                //         name: country.name,
                //         // name: country.name.official,
                //         // population: country.population,
                //         // flag: country.flags.png
                //     })
                //
                //
                //     // console.log(country.name.official)
                //     // console.log(country.flags.png)
                //     // console.log(country.population)
                //     //
                //     // return <div>
                //     //     <p>{country.name.official}</p>
                //     //     <p>{country.flags.png}</p>
                //     //     <p>{country.population}</p>
                //     // </div>
                // })

            }
        )
    }, [])


    // console.log(countries);

    return (
        countries.length > 0 && <>
            <h1>Countries</h1>
            {countries.map((country) =>
                <div key={country.name.official}>
                    <span>{country.name.official}</span>
                    <img src={country.flags.png} width={20} height={20} alt='flag'/>
                    <span>{country.population}</span>
                </div>)}
        </>
    );
}

export default Countries
