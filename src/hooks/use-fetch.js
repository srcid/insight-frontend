import { useState, useEffect} from "react";
import axios from "axios";

function useFetch(asyncFunction) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        async function runner() {
            setLoading(true);
            setError(null);

            try {
                const response = await asyncFunction();
                setData(response.data);
            } catch (err) {
                if (axios.isAxiosError(err) && err.response) {
                    setError(
                        new Error(`Request failed with status code ${err.response.status}`)
                    );
                } else {
                    setError(err);
                }
            } finally {
                setLoading(false);
            }
        }

        runner();
    }, []);

    return { loading, error, data };
}

export {useFetch}