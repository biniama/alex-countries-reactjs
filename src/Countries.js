import {useEffect, useState} from 'react';
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

import {Card, Col, Row} from 'antd';

const {Meta} = Card;

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://restcountries.com/v3.1/all'
        }).then((response) => setCountries(response.data))
    }, [])

    return (
        countries.length === 0 ? <CircularProgress/>
            :
            <>
                <h1>Countries</h1>
                <Row gutter={16}>
                    {countries.map((country) =>
                        // <div key={country.cca2}>
                        //     <span>{country.name.official}</span>
                        //     <img src={country.flags.png} width={20} height={20} alt='flag'/>
                        //     <span>{country.population}</span>
                        // </div>

                        // <Card sx={{maxWidth: 200}}>
                        //     <CardMedia
                        //         sx={{height: 140}}
                        //         image={country.flags.png}
                        //         title={country.name.official}
                        //     />
                        //     <CardContent>
                        //         <Typography gutterBottom variant="h5" component="div">
                        //             {country.name.official}
                        //         </Typography>
                        //         <Typography variant="body2" color="text.secondary">
                        //             {country.population}
                        //         </Typography>
                        //     </CardContent>
                        //     <CardActions>
                        //         <Button size="small">Learn More</Button>
                        //     </CardActions>
                        // </Card>

                        <Col span={{xs: 24, md:12, lg: 4 }} >
                            <Card
                                hoverable
                                style={{width: 240}}
                                cover={<img alt="flag" src={country.flags.png}/>}
                            >
                                <Meta title={country.name.official} description={country.population}/>
                            </Card>
                        </Col>
                    )
                    }
                </Row>
            </>
    );
}

export default Countries
