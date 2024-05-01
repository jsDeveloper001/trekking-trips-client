import { Link } from "react-router-dom";

const TouriestCountry = ({ country }) => {

    return (
        <div>
            <Link to={`/tourist-spot/country/${country.country}`}>
                <div className='border-2 p-4 rounded-lg'>
                    <img src={country.Flag} alt="Tourist Spot Image" className='w-full h-52 rounded-lg' />
                    <h2 className='text-xl font-bold my-3'>{country.country}</h2>
                    <p>{country.Description.slice(0, 500)}...</p>
                </div>
            </Link>
        </div>
    );
};

export default TouriestCountry;