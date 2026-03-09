import { gujaratCities } from "../data/gujaratCities";
import { Link } from "react-router-dom";

const GujaratAdvertisingHub = () => {

    return (

        <div className="container">

            <h1>Outdoor Advertising Across Gujarat</h1>

            <div className="city-grid">

                {gujaratCities.map((city, i) => (

                    <div key={i}>

                        <Link to={`/hoardings/${city}`}>
                            Hoardings in {city}
                        </Link>

                        <Link to={`/outdoor/${city}`}>
                            Outdoor Advertising {city}
                        </Link>

                    </div>

                ))}

            </div>

        </div>

    );

};

export default GujaratAdvertisingHub;