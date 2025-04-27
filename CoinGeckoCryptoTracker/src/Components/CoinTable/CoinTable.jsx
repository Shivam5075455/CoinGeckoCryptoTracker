import {useState, useEffect} from "react";
import { FetchCoinData } from "../../Services/FetchCoinData";
import {useQuery} from "react-query";
function CoinTable(){

    const [page, setPage] = useState(1);

    const {data, isLoading, isError, error} = useQuery(
        ['coins', page], () => FetchCoinData(page, 'usd'), {
        retry: 2,
        retryDelay: 1000,
        cacheTime: 100 * 60 * 2,
    });

    useEffect(() => {
        console.log("Data: ", data);
    }, [data]);

    if(isLoading){
        return <div>Loading...</div>
    }

    if(isError){
        return <div>Error: {error.message}</div>
    }

    return (
        <>
            <h1>Coin Table</h1>
            <button onClick={() => setPage(page + 1)}>Next Page</button>
            <p>Current Page: {page}</p>
        </>
    )

}

export default CoinTable;