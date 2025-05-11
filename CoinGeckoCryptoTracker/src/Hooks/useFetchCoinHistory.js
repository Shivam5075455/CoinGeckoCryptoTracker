import { useState } from "react";
import { FetchCoinHistoricData } from "../Services/FetchCoinHistoricData";
// import currencyContext from '../../State/Store';
import currencyContext from '../State/Store';
import {useQuery} from 'react-query';

function useFetchCoinHistory(coinId) {
    const { currency } = currencyContext();
    const [days, setDays] = useState(7);
    const [interval, setCoinInterval] = useState('daily');

    const { data: historicData, isLoading, isError } = useQuery(['coinHistoricData', coinId, currency.toLowerCase(), days, interval], //Query key
        () => FetchCoinHistoricData(coinId, interval, days, currency), // fetch function
        {
            cacheTime: 1000 * 60 * 2,
            staleTime: 1000 * 60 * 2,
        }
    );

    return [
        historicData,
        isLoading, 
        isError,
        days,
        setDays,
        setCoinInterval,
        currency

    ]
}

export default useFetchCoinHistory;