import { useSearchParams } from "react-router-dom";
import { useFetch } from "../../hooks/use-fetch";
import { InsightPythonService } from "../../services/endpoints";
import { Tabs } from "../../components/tabs";
import { useState } from "react";

function DataTable({ headerName, keyName, state }) {
    if (state.loading) {
        return <span className="loading loading-spinner loading-lg" />
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Ano</th>
                        <th>{headerName}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.data?.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{element.ano}</td>
                                    <td>{element[keyName]}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}


export default function City() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id")
    const name = searchParams.get("name")
    const population = useFetch(async () => await InsightPythonService.getCityPopulation(id))
    const gpd = useFetch(() => InsightPythonService.getCityGDP(id))
    const literacy = useFetch(() => InsightPythonService.getCityLiteracy(id))
    const [currentTab, setCurrentTab] = useState(0)
    return (
        <>
            <div className="mb-16">
                <h1 className="text-base-content text-2xl font-bold">{name}</h1>
                <p className="text-base-content opacity-50 mt-2">{id}</p>
            </div>
            <Tabs>
                <Tabs.Tab title="Tabela de população" value={0} checked={currentTab == 0} onChange={setCurrentTab}>
                    <DataTable headerName="População (mi)" keyName="populacao" state={population} />
                </Tabs.Tab>
                <Tabs.Tab title="Tabela de PIB" value={1} checked={currentTab == 1} onChange={setCurrentTab}>
                    <DataTable headerName="PIB (mi)" keyName="valor" state={gpd} />
                </Tabs.Tab>
                <Tabs.Tab title="Tabela de alfabetização" value={2} checked={currentTab == 2} onChange={setCurrentTab}>
                    <DataTable headerName="Alfabetização (%)" keyName="taxa" state={literacy} />
                </Tabs.Tab>
            </Tabs>
        </>
    )
}
