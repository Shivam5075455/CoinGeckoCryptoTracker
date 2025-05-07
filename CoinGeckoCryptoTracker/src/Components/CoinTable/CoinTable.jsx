import { useState } from "react";
import { FetchCoinData } from "../../Services/FetchCoinData";
import { useQuery } from "react-query";
// import { CurrencyContext } from "../../Context/CurrencyContext";
import currencyStore from '../../State/Store';
import perPageStore from '../../State/PerPageStore';
import { useNavigate } from "react-router-dom";
function CoinTable() {

    const navigate = useNavigate();
    // const {currency} = useContext(CurrencyContext);
    const { currency } = currencyStore();
    const { perPage } = perPageStore(); // Access the global perPage state
    const [page, setPage] = useState(1);

    const { data, isLoading, isError, error } = useQuery(
        ['coins', page, currency, perPage], //if any parameter(coins/page/currency) changes, it will refetch the data
        () => FetchCoinData( page, currency, perPage ), {
        // retry: 2,
        // retryDelay: 1000,
        cacheTime: 100 * 60 * 2,
        staleTime: 1000 * 60 * 2,

    });

    function handleCoinRedirect(id){
        navigate(`/details/${id}`)
    }

    // useEffect(() => {
    //     console.log("Data: ", data);
    // }, [data]);

    if (isLoading) {
        return <div>Loading coin data...</div>
    }

    if (isError) {
        return <div>Error: {error.message}</div>
    }

    if (!data || data.length === 0) {
        return <div>No data available</div>
    }

    return (
        <>
            <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto ">
                <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibolc items-center justify-center">
                    {/* Header of the table*/}
                    <div className="basis-[35%]">
                        Coin
                    </div>
                    <div className="basis-[25%]">
                        Price{`(${currency})`}
                    </div>
                    <div className="basis-[20%]">
                        24hr change
                    </div>
                    <div className="basis-[20%]">
                        Market Cap
                    </div>
                </div>

                <div className="flex flex-col w-[80vw] mx-auto">
                    {isLoading && <div>Loading...</div>}
                    {data.map((coin) => {
                        return (
                            <div key={coin.id}
                             className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center
                            justify-between cursor-pointer"
                                onClick={() => handleCoinRedirect(coin.id)}
                            >

                                <div className="flex items-center justify-start gap-3 basis-[35%]">

                                    <div className="w-[5rem] h-[5rem]">
                                        <img src={coin.image} className="h-full w-full" />
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="text-3xl"> {coin.name}</div>
                                        <div className="text-xl">{coin.symbol}</div>
                                    </div>

                                </div>

                                <div className="basis-[25%]">
                                    {coin.high_24h}
                                </div>
                                <div className="basis-[20%]">
                                    {coin.price_change_24h}
                                </div>
                                <div className="basis-[20%]">
                                    {coin.market_cap}
                                </div>
                            </div>
                        )
                    })}

                </div>

                <div className="flex gap-4 justify-center items-center">
                    <button
                        onClick={() => setPage((page - 1))}
                        disabled={page === 1}
                        className="btn btn-primary btn-wide text-white text-2xl"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => setPage((page + 1))}
                        className="btn btn-secondary btn-wide text-white text-2xl"
                    >
                        Next
                    </button>
                </div>

            </div>

            <div className="flex justify-between">

                <div>
                    <h1 className="text-2xl text-end text-white m-5">Page: {page}</h1>
                </div>

                <div>
                    <h1 className="text-2xl text-end text-white m-5">PerPage: {perPage}</h1>
                </div>
            </div>
        </>
    )

}

export default CoinTable;