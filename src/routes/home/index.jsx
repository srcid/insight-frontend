import { useFetch } from "../../hooks/use-fetch"
import { InsightPythonService } from "../../services/endpoints"
import CityCard from "../../components/city-card"

export default function Home() {
    const { data, loading, error } = useFetch(InsightPythonService.getCities)

    if (loading) {
        return <></>
    } 
    
    return (
        <div className="flex flex-col gap-4 items-center">
            {data?.map(({id, nome}, index) => <CityCard key={index} id={id} name={nome} />)}
        </div>
    )
}
