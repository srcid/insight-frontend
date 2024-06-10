import { createSearchParams, Link, useNavigate } from "react-router-dom"
import City from "../../routes/city"

function CityCard({id, name}) {
    const navigate = useNavigate()
    function handleCityCardClick() {
        navigate({
            pathname: 'cidade',
            search: `?${createSearchParams({
              'id': id,
              'name': name
            })}`,
          });
    }
    
    return (
        <button onClick={handleCityCardClick} className="card w-96 bg-base-200 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
            </div>
        </button>
    )
}

export default CityCard