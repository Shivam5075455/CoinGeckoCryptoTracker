import { useEffect, useState } from "react";
function CoinTable(){

    const [count, setCount] = useState(0);

    async function fetchData() {

        // const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        // const response = await fetch('https://api.coingecko.com/api/v3/ping');
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
        // return data;

    }

    useEffect(() =>{
        fetchData();
    }, [])

    return(
        <>
           
        </>
    )



}

export default CoinTable;