import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "../Services/FetchCoinDetails";
import currencyStore from '../State/Store';


function CoinDetailsPage() {
    const { coinId } = useParams();
    const { currency } = currencyStore();
    

    console.log(currency)

    const { isError, isLoading, data: coin } = useQuery(["coin", coinId], () => fetchCoinDetails(coinId), {
        cacheTime: 1000 * 60 * 2, // Data stays in the cache for 2 minutes after becoming stale
        staleTime: 1000 * 60, // Data is considered fresh for 1 minute
        // retryDelay: 2000,
    });


    // useEffect(() => {
    //     console.log(coin);
    // }, [coin]);


    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    if (isError) {
        return (
            <div>Error: Something went wrong</div>
        )
    }




    return (
        <div className="flex flex-col md:flex-row">
            {/* left side  */}
            <div className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 border-r-2 border-gray-500">
                <img
                    alt={coin?.name}
                    src={coin?.image?.large}
                    className="h-52 mb-5"
                />
                <h1
                    className="text-4xl font-bold mb-5"
                >
                    {coin?.name}
                </h1>
                <p className="w-full px-6 py-4 text-justify">
                    {coin?.description?.en}
                </p>

                <div
                    className="w-full felx flex-col md:flex-row md:justify-around"
                >
                    <div
                        className="flex items-center mb-4 md:mb-0"
                    >
                        <h2
                            className="text-xl font-bold"
                        >
                            Rank
                        </h2>
                        <span
                            className="ml-3 text-xl"
                        >
                            {coin?.market_cap_rank}
                        </span>
                    </div>


                     <div
                        className="flex items-center mb-4 md:mb-0"
                    >
                        <h2
                            className="text-xl font-bold text-yellow-400"
                        >
                            Current Price
                        </h2>
                        <span
                            className="ml-3 text-xl"
                        >
                            {coin?.market_data.current_price[currency.toLowerCase()]}
                        </span>
                    </div> 

                </div>
            </div>

            {/* right side */}
            <div className="font-bold md:w-2/3 w-full p-6 ">
                Coin Information
            </div>
        </div>
    )
}

export default CoinDetailsPage;