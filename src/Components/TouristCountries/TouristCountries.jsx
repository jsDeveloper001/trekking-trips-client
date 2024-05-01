import { useLoaderData } from "react-router-dom";
import TouriestCountry from "../TouriestCountry/TouriestCountry";

const TouristCountries = () => {
    const Coutries = useLoaderData()

    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                Coutries.map(country => <TouriestCountry country={country} key={country._id} />)
            }
        </div>
    );
};

export default TouristCountries;